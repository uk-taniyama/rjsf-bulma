import type { FC } from "react";
import { TitleFieldProps } from "@rjsf/utils";

const TitleField: FC<TitleFieldProps> = ({ id, title, uiSchema }) => (
  <div id={id} className="title-field">
    <h5 style={{ borderBottom: "1px solid #CCC" }}>
      {(uiSchema && uiSchema["ui:title"]) || title}
    </h5>
  </div>
);

export default TitleField;
