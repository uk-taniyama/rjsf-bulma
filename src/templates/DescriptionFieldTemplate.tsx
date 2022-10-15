import type { FC } from "react";

import clsx from "clsx";

import { isSmallClass } from "../ui";

import type { DescriptionFieldProps } from "@rjsf/utils";

const DescriptionFieldTemplate: FC<DescriptionFieldProps> = ({
  schema: { type },
  description,
  registry,
}) => {
  if (!description) {
    return null;
  }

  return (
    <div
      className={clsx(
        type === "object" ? "description-field" : "help",
        isSmallClass(registry.formContext)
      )}
    >
      {description}
    </div>
  );
};

export default DescriptionFieldTemplate;
