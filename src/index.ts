import Form from "./Form";

export * from "./hooks";

export { default as Form } from "./Form";
export { default as Templates, IconButton } from "./templates";
export type { FilesInfoTemplateProps } from "./templates";
export { default as Widgets } from "./widgets";
export { default as Theme } from "./Theme";

export { createIsSmallUiSchema } from "./ui";

export interface BulmaContext {
  isSmall?: boolean;
  isHorizontal?: boolean;
}

declare module "@rjsf/utils" {
  interface FormContext {
    bulma?: BulmaContext;
  }
}

export default Form;
