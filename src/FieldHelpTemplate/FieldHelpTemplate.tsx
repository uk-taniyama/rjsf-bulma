import { FieldHelpProps } from "@rjsf/utils";
import clsx from "clsx";

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
export default function FieldHelpTemplate(props: FieldHelpProps) {
  const { idSchema, help, hasErrors } = props;
  if (!help) {
    return null;
  }
  const id = `${idSchema.$id}__help`;
  return (
    <p className={clsx('help', hasErrors && 'is-danger')} id={id}>{help}</p>
  );
}
