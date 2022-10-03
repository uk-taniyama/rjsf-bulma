import type { FC } from "react";
import type { ErrorListProps } from "@rjsf/utils";
import { ErrorMessage, ErrorMessageBody, ErrorMessageHeader } from "../ui";

const ErrorList: FC<ErrorListProps> = ({ errors }) => (
  <ErrorMessage>
    <ErrorMessageHeader>Errors</ErrorMessageHeader>
    <ErrorMessageBody>
      <ul>
        {errors.map((error, i: number) => (
          <li key={i}>{error.stack}</li>
        ))}
      </ul>
    </ErrorMessageBody>
  </ErrorMessage>
);

export default ErrorList;
