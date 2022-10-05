// copy from @rjsf/core 4adf86a1a633ae25fbeae2f9ca3e419716e5a3d2
// FIXME dropとfile inputを共通化。
import type { ChangeEvent, DragEvent, UIEvent } from "react";
import { useCallback, useMemo, useState } from "react";

import type { WidgetProps } from "@rjsf/utils";
import { dataURItoBlob } from "@rjsf/utils";

function addNameToDataURL(dataURL: string, name: string) {
  if (dataURL === null) {
    return null;
  }
  return dataURL.replace(";base64", `;name=${encodeURIComponent(name)};base64`);
}

export type FileInfoType = {
  dataURL?: string | null;
  name: string;
  size: number;
  type: string;
};

export interface FilesInfoProps {
  filesInfo: FileInfoType[];
  multiple?: boolean;
}

function processFile(file: File): Promise<FileInfoType> {
  const { name, size, type } = file;
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onerror = reject;
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        resolve({
          dataURL: addNameToDataURL(event.target.result, name),
          name,
          size,
          type,
        });
      } else {
        resolve({
          dataURL: null,
          name,
          size,
          type,
        });
      }
    };
    reader.readAsDataURL(file);
  });
}

function processFiles(files: FileList) {
  return Promise.all(Array.from(files).map(processFile));
}

function extractFileInfo(dataURLs: string[]) {
  return dataURLs
    .filter((dataURL) => dataURL != null)
    .map((dataURL) => {
      const { blob, name } = dataURItoBlob(dataURL);
      return {
        name: name,
        size: blob.size,
        type: blob.type,
      };
    });
}

function handleDragEvent(event: DragEvent, multiple?: boolean) {
  event.stopPropagation();
  event.preventDefault();
  const items = event.dataTransfer.items;
  if (items.length === 0 || (!multiple && items.length > 1)) {
    event.dataTransfer.dropEffect = "none";
    return false;
  }
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (item.kind !== "file") {
      event.dataTransfer.dropEffect = "none";
      return false;
    }
  }
  event.dataTransfer.dropEffect = "copy";
  return true;
}

export function useFileWidget<T, F>({
  value,
  multiple,
  onChange,
}: WidgetProps<T, F>) {
  const [dragOver, setDragOver] = useState(false);
  const extractedFilesInfo = useMemo(
    () =>
      Array.isArray(value) ? extractFileInfo(value) : extractFileInfo([value]),
    [value]
  );
  const [filesInfo, setFilesInfo] =
    useState<FileInfoType[]>(extractedFilesInfo);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }
      processFiles(event.target.files).then((filesInfoEvent) => {
        setFilesInfo(filesInfoEvent);
        const newValue = filesInfoEvent.map((fileInfo) => fileInfo.dataURL);
        if (multiple) {
          onChange(newValue);
        } else {
          onChange(newValue[0]);
        }
      });
    },
    [multiple, onChange]
  );

  const handleClear = useCallback(
    (e?: UIEvent) => {
      e?.stopPropagation();
      setFilesInfo([]);
      onChange(multiple ? [] : undefined);
    },
    [multiple, onChange]
  );

  const handleDragEnter = useCallback(
    (event: DragEvent<HTMLSpanElement>) => {
      if (!handleDragEvent(event, multiple)) {
        return;
      }
      setDragOver(true);
    },
    [multiple]
  );

  const handleDragOver = useCallback(
    (event: DragEvent) => handleDragEvent(event, multiple),
    [multiple]
  );

  const handleDragLeave = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
      processFiles(event.dataTransfer.files).then((filesInfoEvent) => {
        setFilesInfo(filesInfoEvent);
        const newValue = filesInfoEvent.map((fileInfo) => fileInfo.dataURL);
        if (multiple) {
          onChange(newValue);
        } else {
          onChange(newValue[0]);
        }
      });
    },
    [multiple, onChange]
  );

  return {
    handleChange,
    handleClear,
    dragOver,
    droppableProps: {
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
    filesInfo,
  };
}
