import type { FC } from "react";
import type { FieldHelpProps } from "@rjsf/utils";
import clsx from "clsx";

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
const FieldHelpTemplate: FC<FieldHelpProps> = (props) => {
  const { help, hasErrors } = props;
  if (!help) {
    return null;
  }
  return <p className={clsx("help", hasErrors && "is-danger")}>{help}</p>;
};

export default FieldHelpTemplate;
