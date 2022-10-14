import type { ComponentType } from "react";

import ArrayFieldItemTemplate from "./ArrayFieldItemTemplate";
import ArrayFieldTemplate from "./ArrayFieldTemplate";
import BaseInputTemplate from "./BaseInputTemplate";
import {
  AddButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
} from "./ButtonTemplates";
import DescriptionFieldTemplate from "./DescriptionFieldTemplate";
import ErrorListTemplate from "./ErrorListTemplate";
import FieldErrorTemplate from "./FieldErrorTemplate";
import FieldHelpTemplate from "./FieldHelpTemplate";
import FieldTemplate from "./FieldTemplate";
import FilesInfoTemplate from "./FilesInfoTemplate";
import ObjectFieldTemplate from "./ObjectFieldTemplate";
import SubmitButton from "./SubmitButton";
import TitleFieldTemplate from "./TitleFieldTemplate";
import WrapIfAdditionalTemplate from "./WrapIfAdditionalTemplate";

import type { FilesInfoTemplateProps } from "./FilesInfoTemplate";

export { default as IconButton } from "./IconButton";
export type { FilesInfoTemplateProps } from "./FilesInfoTemplate";

declare module "@rjsf/utils" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TemplatesType<T = any, F = any> {
    FilesInfoTemplate: ComponentType<FilesInfoTemplateProps>;
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
