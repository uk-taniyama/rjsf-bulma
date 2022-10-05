// TODO FilesInfo to templates???
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { getTemplate, getUiOptions } from "@rjsf/utils";
import { useFileWidget } from "../rjsf-core/useFileWidget";
import clsx from "clsx";
import { RemoveButton } from "../templates/IconButton";
import { isSmallClass } from "../ui";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";

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
    uiSchema,
  } = props;
  const { handleChange, handleClear, dragOver, droppableProps, filesInfo } =
    useFileWidget(props);
  const className = isSmallClass(formContext);
  const disabledInput = disabled || readonly;
  const FilesInfoTemplate = getTemplate(
    "FilesInfoTemplate",
    registry,
    getUiOptions(uiSchema)
  );
  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <div
          className={clsx("input", className, dragOver && "is-success")}
          {...droppableProps}
        >
          <FilesInfoTemplate filesInfo={filesInfo} multiple={multiple} />
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
