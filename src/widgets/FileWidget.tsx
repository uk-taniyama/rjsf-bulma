import type { FC } from "react";

import clsx from "clsx";

import { useFileWidget } from "../rjsf-core/useFileWidget";
import { isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const FileWidget: FC<WidgetProps> = (props) => {
  const { readonly, disabled, multiple, formContext, registry } = props;
  const {
    handleChoose,
    handleClear,
    fileInputEl,
    dragOver,
    droppableProps,
    filesInfo,
  } = useFileWidget(props);

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
          {fileInputEl}
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
