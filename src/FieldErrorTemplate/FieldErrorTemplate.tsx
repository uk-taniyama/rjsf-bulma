import { FieldErrorProps } from "@rjsf/utils";

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors = [] } = props;
  if (errors.length === 0) {
    return null;
  }

  return (
    <p className="help is-danger">
      <ul>
        {errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    </p>
  );
}
