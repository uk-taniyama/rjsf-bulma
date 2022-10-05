import Form from "./Form";
import type { FilesInfoProps } from "./templates";

export { default as Form } from "./Form";
export { default as Templates } from "./templates";
export type { FilesInfoProps, FileInfoType } from "./templates";
export { default as Widgets } from "./widgets";
export { default as Theme } from "./Theme";

export { createIsSmallUiSchema } from "./ui";

declare module "@rjsf/utils" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TemplatesType<T = any, F = any> {
    FilesInfoTemplate: React.ComponentType<FilesInfoProps>;
  }
}

export default Form;
