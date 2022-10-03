import type { FC } from "react";
import type { ErrorListProps } from "@rjsf/utils";
import clsx from "clsx";
import { isSmallClass } from "../ui";

const ErrorList: FC<ErrorListProps> = ({ errors, formContext }) => (
  <article className={clsx("message is-danger", isSmallClass(formContext))}>
    <div className="message-header">
      <p>Errors</p>
    </div>
    <div className="message-body">
      <ul>
        {errors.map((error, i: number) => (
          <li key={i}>{error.stack}</li>
        ))}
      </ul>
    </div>
  </article>
);

export default ErrorList;
