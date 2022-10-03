import type { FC } from "react";
import type { TitleFieldProps } from "@rjsf/utils";
import { Required, isSmallClass } from "../ui";
import clsx from "clsx";

const TitleField: FC<TitleFieldProps> = ({
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

export default TitleField;
