import { FieldErrorProps } from "@rjsf/utils";

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors = [], idSchema } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = `${idSchema.$id}__error`;

  return (
    <p className="help is-danger">
      {errors.map((error, i) => {
        return (
            <li key={i}>{error}</li>
        );
      })}
    </p>
  );
}
