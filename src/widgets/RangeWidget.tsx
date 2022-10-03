// TODO FIXME
import type { FC } from "react";

import { getTemplate, WidgetProps } from "@rjsf/utils";

const RangeWidget: FC<WidgetProps> = (props) => {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate">(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate {...props} />;
};

export default RangeWidget;
