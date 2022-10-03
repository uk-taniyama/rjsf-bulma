import type { FC } from "react";
import type { FieldHelpProps } from "@rjsf/utils";
import clsx from "clsx";

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
const FieldHelpTemplate: FC<FieldHelpProps> = (props) => {
  const { idSchema, help, hasErrors } = props;
  if (!help) {
    return null;
  }
  const id = `${idSchema.$id}__help`;
  return (
    <p className={clsx("help", hasErrors && "is-danger")} id={id}>
      {help}
    </p>
  );
};

export default FieldHelpTemplate;
