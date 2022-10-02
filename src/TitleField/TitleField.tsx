import { TitleFieldProps } from "@rjsf/utils";

const TitleField = ({ id, title, uiSchema }: TitleFieldProps) => (
  <div id={id} className="title-field mb-2">
    <h5 style={{ borderBottom: "1px solid #CCC" }}>
      {(uiSchema && uiSchema["ui:title"]) || title}
    </h5>
  </div>
);

export default TitleField;
