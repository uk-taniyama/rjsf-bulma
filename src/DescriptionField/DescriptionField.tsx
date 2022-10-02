import { DescriptionFieldProps } from "@rjsf/utils";

const DescriptionField = ({ id, description }: DescriptionFieldProps) => {
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
