import type { FC } from "react";

import clsx from "clsx";

import { Required, isSmallClass } from "../ui";

import type { TitleFieldProps } from "@rjsf/utils";

const TitleFieldTemplate: FC<TitleFieldProps> = ({
  id,
  title,
  required,
  uiSchema,
  registry,
}) => (
  <div
    id={id}
    className={clsx("title-field", isSmallClass(registry.formContext))}
  >
    {(uiSchema && uiSchema["ui:title"]) || title}
    <Required required={required} />
  </div>
);

export default TitleFieldTemplate;
