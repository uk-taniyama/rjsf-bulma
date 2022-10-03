import type { FormProps } from "@rjsf/core";
import { withTheme } from "@rjsf/core";

import Theme from "../Theme";

const Form: React.ComponentType<FormProps> = withTheme(Theme);

export default Form;
