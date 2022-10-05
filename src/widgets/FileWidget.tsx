// TODO FilesInfo to templates???
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import type { FilesInfoProps } from "../rjsf-core/useFileWidget";
import { useFileWidget } from "../rjsf-core/useFileWidget";
import clsx from "clsx";
import { RemoveButton } from "../templates/IconButton";
import { isSmallClass } from "../ui";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";

const FilesInfo: FC<FilesInfoProps> = ({ filesInfo, multiple }) => {
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

const FileWidget: FC<WidgetProps> = (props) => {
  const { id, readonly, disabled, autofocus, multiple, options, formContext } =
    props;
  const { handleChange, handleClear, dragOver, droppableProps, filesInfo } =
    useFileWidget(props);
  const className = isSmallClass(formContext);
  const disabledInput = disabled || readonly;
  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <div
          className={clsx("input", className, dragOver && "is-success")}
          {...droppableProps}
        >
          <FilesInfo filesInfo={filesInfo} />
        </div>
      </div>
      <div className="control">
        <input
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
        <label htmlFor={id}>
          <a
            className={clsx("button", className)}
            title="Choose"
            // @ts-expect-error: TS2322 bulma does not supported 'is-disabled'.
            disabled={disabledInput}
          >
            <BsPlus />
          </a>
        </label>
        <RemoveButton
          iconType="block"
          className={className}
          disabled={disabledInput || filesInfo.length === 0}
          onClick={handleClear}
        />
      </div>
    </div>
  );
};

export default FileWidget;
