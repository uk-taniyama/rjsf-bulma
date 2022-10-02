import type { FC } from "react";
import { ErrorListProps } from "@rjsf/utils";
import { Card, CardHeader, CardContent } from "../ui";

const ErrorList: FC<ErrorListProps> = ({ errors }) => (
  <Card>
    <CardHeader>Errors</CardHeader>
    <CardContent>
      <ul>
        {errors.map((error, i: number) => (
          <li key={i}>{error.stack}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ErrorList;
