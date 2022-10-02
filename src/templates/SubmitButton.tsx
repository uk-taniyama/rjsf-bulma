import type { FC } from "react";
import { getSubmitButtonOptions, SubmitButtonProps } from "@rjsf/utils";

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const {
    submitText,
    norender,
    props: submitButtonProps,
  } = getSubmitButtonOptions(props.uiSchema);
  if (norender) {
    return null;
  }
  return (
    <div>
      <button
        className="button is-primary is-small"
        type="submit"
        {...submitButtonProps}
      >
        {submitText}
      </button>
    </div>
  );
};

export default SubmitButton;