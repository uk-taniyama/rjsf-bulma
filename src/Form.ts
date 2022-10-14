import type { FormProps } from "@rjsf/core";
import { withTheme } from "@rjsf/core";
import type { ComponentType } from "react";

import Theme from "./Theme";

const Form: ComponentType<FormProps> = withTheme(Theme);

export default Form;
