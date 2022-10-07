import type { FC } from "react";
import { useCallback, useRef } from "react";
import type { WidgetProps } from "@rjsf/utils";
import clsx from "clsx";
import { useFileWidget } from "../rjsf-core/useFileWidget";
import { isSmallClass } from "../ui";

const FileWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    readonly,
    disabled,
    autofocus,
    multiple,
    options,
    formContext,
    registry,
  } = props;
  const { handleChange, handleClear, dragOver, droppableProps, filesInfo } =
    useFileWidget(props);
  const fileRef = useRef<HTMLInputElement>(null);
  const handleChoose = useCallback(() => {
    fileRef.current?.click();
  }, [fileRef]);

  const {
    FilesInfoTemplate,
    ButtonTemplates: { AddButton, RemoveButton },
  } = registry.templates;

  const className = isSmallClass(formContext);
  const disabledInput = disabled || readonly;
  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <div
          className={clsx("input", className, dragOver && "is-success")}
          {...droppableProps}
        >
          <input
            ref={fileRef}
            id={id}
            name={id}
            type="file"
            style={{ display: "none" }}
            disabled={disabledInput}
            onChange={handleChange}
            value=""
            autoFocus={autofocus}
            multiple={multiple}
            accept={options.accept ? String(options.accept) : undefined}
          />
          <FilesInfoTemplate filesInfo={filesInfo} multiple={multiple} />
        </div>
      </div>
      <div className="control">
        <AddButton
          title="Choose"
          className={className}
          disabled={disabledInput}
          onClick={handleChoose}
        />
      </div>
      <div className="control">
        <RemoveButton
          className={className}
          disabled={disabledInput || filesInfo.length === 0}
          onClick={handleClear}
        />
      </div>
    </div>
  );
};

export default FileWidget;
