import type { FC } from "react";

import { getTemplate } from "@rjsf/utils";

import type { WidgetProps } from "@rjsf/utils";

const RangeWidget: FC<WidgetProps> = (props) => {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<"BaseInputTemplate">(
    "BaseInputTemplate",
    registry,
    options
  );
  return <BaseInputTemplate {...props} type="range" />;
};

export default RangeWidget;
