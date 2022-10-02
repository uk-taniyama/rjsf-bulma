import type { FC } from "react";
import { DescriptionFieldProps } from "@rjsf/utils";

const DescriptionField: FC<DescriptionFieldProps> = ({ id, description }) => {
  if (!description) {
    return null;
  }

  return (
    <div id={id} className="mb-1 is-size-7">
      {description}
    </div>
  );
};

export default DescriptionField;
