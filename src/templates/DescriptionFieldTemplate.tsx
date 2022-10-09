import type { FC } from "react";
import type { DescriptionFieldProps } from "@rjsf/utils";
import clsx from "clsx";
import { isSmallClass } from "../ui";

const DescriptionFieldTemplate: FC<DescriptionFieldProps> = ({
  id,
  description,
  registry,
}) => {
  if (!description) {
    return null;
  }

  return (
    <div
      id={id}
      className={clsx(
        "description-field",
        isSmallClass(registry.formContext, "is-size-7")
      )}
    >
      {description}
    </div>
  );
};

export default DescriptionFieldTemplate;
