import type { FC } from "react";
import type { TitleFieldProps } from "@rjsf/utils";
import { Required } from "../ui";

const TitleField: FC<TitleFieldProps> = ({ id, title, required, uiSchema }) => (
  <div id={id} className="title-field is-size-6">
    {(uiSchema && uiSchema["ui:title"]) || title}
    <Required required={required} />
  </div>
);

export default TitleField;
