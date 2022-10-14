// FIXME submit buttonからformContextが取れない！
import type { FC } from "react";

import { getSubmitButtonOptions } from "@rjsf/utils";
import clsx from "clsx";

import type { SubmitButtonProps } from "@rjsf/utils";

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const {
    submitText,
    norender,
    props: { className, ...submitButtonProps } = {},
  } = getSubmitButtonOptions(props.uiSchema);
  if (norender) {
    return null;
  }
  return (
    <button
      {...submitButtonProps}
      className={clsx("button is-primary", className)}
      type="submit"
    >
      {submitText}
    </button>
  );
};

export default SubmitButton;
