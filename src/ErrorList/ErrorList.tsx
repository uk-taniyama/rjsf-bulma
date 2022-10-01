import { ErrorListProps } from "@rjsf/utils";
import { Card, CardHeader, CardContent } from "../ui";

const ErrorList = ({ errors }: ErrorListProps) => (
  <Card>
    <CardHeader>Errors</CardHeader>
    <CardContent>
      {/* <ListGroup>
        {errors.map((error, i: number) => {
          return (
            <ListGroup.Item key={i} className="border-0">
              <span>{error.stack}</span>
            </ListGroup.Item>
          );
        })}
      </ListGroup> */}
    </CardContent>
  </Card>
);

export default ErrorList;
