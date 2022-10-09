import type { FC } from "react";
import type { TitleFieldProps } from "@rjsf/utils";
import clsx from "clsx";
import { Required, isSmallClass } from "../ui";

const TitleFieldTemplate: FC<TitleFieldProps> = ({
  id,
  title,
  required,
  uiSchema,
  registry,
}) => (
  <div
    id={id}
    className={clsx(
      "title-field",
      isSmallClass(registry.formContext, "is-size-6")
    )}
  >
    {(uiSchema && uiSchema["ui:title"]) || title}
    <Required required={required} />
  </div>
);

export default TitleFieldTemplate;
