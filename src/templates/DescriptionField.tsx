import type { FC } from "react";
import type { DescriptionFieldProps } from "@rjsf/utils";

const DescriptionField: FC<DescriptionFieldProps> = ({ id, description }) => {
  if (!description) {
    return null;
  }

  return (
    <div id={id} className="description-field is-size-7">
      {description}
    </div>
  );
};

export default DescriptionField;
