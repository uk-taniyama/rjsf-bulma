import type { FC } from "react";
import type { FilesInfoProps } from "../rjsf-core/useFileWidget";

const FilesInfoTemplate: FC<FilesInfoProps> = ({ filesInfo, multiple }) => {
  if (filesInfo.length === 0) {
    const placeholder = multiple
      ? "Choose or drop files."
      : "Choose or drop a file.";
    return <span className="placeholder">{placeholder}</span>;
  }
  if (filesInfo.length === 1) {
    return <>1 file. ({filesInfo[0].name})</>;
  }
  return (
    <>
      {filesInfo.length} files. ({filesInfo.map((info) => info.name).join(", ")}
      )
    </>
  );
};

export default FilesInfoTemplate;
