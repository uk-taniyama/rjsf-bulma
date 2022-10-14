import type { FC } from "react";

import type { FieldErrorProps } from "@rjsf/utils";

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
const FieldErrorTemplate: FC<FieldErrorProps> = (props) => {
  const { errors = [] } = props;
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="help is-danger">
      <ul>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default FieldErrorTemplate;
