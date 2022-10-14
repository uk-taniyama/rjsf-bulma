import type { ComponentType } from "react";

import { withTheme } from "@rjsf/core";

import Theme from "./Theme";

import type { FormProps } from "@rjsf/core";

const Form: ComponentType<FormProps> = withTheme(Theme);

export default Form;
