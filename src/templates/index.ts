import ArrayFieldItemTemplate from "./ArrayFieldItemTemplate";
import ArrayFieldTemplate from "./ArrayFieldTemplate";
import BaseInputTemplate from "./BaseInputTemplate";
import DescriptionFieldTemplate from "./DescriptionField";
import ErrorListTemplate from "./ErrorList";
import {
  AddButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
} from "./ButtonTemplates";
import FieldErrorTemplate from "./FieldErrorTemplate";
import FieldHelpTemplate from "./FieldHelpTemplate";
import FieldTemplate from "./FieldTemplate";
import ObjectFieldTemplate from "./ObjectFieldTemplate";
import SubmitButton from "./SubmitButton";
import TitleFieldTemplate from "./TitleField";
import WrapIfAdditionalTemplate from "./WrapIfAdditionalTemplate";
import type { FilesInfoTemplateProps } from "./FilesInfoTemplate";
import FilesInfoTemplate from "./FilesInfoTemplate";

export { default as IconButton } from "./IconButton";
export type { FilesInfoTemplateProps } from "./FilesInfoTemplate";

declare module "@rjsf/utils" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TemplatesType<T = any, F = any> {
    FilesInfoTemplate: React.ComponentType<FilesInfoTemplateProps>;
  }
}

export default {
  ArrayFieldItemTemplate,
  ArrayFieldTemplate,
  BaseInputTemplate,
  ButtonTemplates: {
    AddButton,
    MoveDownButton,
    MoveUpButton,
    RemoveButton,
    SubmitButton,
  },
  DescriptionFieldTemplate,
  ErrorListTemplate,
  FieldErrorTemplate,
  FieldHelpTemplate,
  FieldTemplate,
  ObjectFieldTemplate,
  TitleFieldTemplate,
  WrapIfAdditionalTemplate,
  FilesInfoTemplate,
};
