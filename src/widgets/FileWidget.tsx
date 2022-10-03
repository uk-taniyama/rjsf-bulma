// TODO FIXME Files
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { getTemplate } from "@rjsf/utils";

const FileWidget: FC<WidgetProps> = (props) => {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate">(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate {...props} type="file" />;
};

export default FileWidget;
