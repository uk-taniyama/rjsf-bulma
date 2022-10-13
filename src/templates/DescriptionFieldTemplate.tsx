import type { FC } from "react";
import type { DescriptionFieldProps } from "@rjsf/utils";
import clsx from "clsx";
import { isSmallClass } from "../ui";

const DescriptionFieldTemplate: FC<DescriptionFieldProps> = ({
  description,
  registry,
}) => {
  if (!description) {
    return null;
  }

  return (
    <div
      className={clsx("description-field", isSmallClass(registry.formContext))}
    >
      {description}
    </div>
  );
};

export default DescriptionFieldTemplate;
