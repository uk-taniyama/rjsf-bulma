import type { FC, PropsWithChildren } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

export const Row = ({ children }: PropsWithChildren) => (
  <div className="columns is-gapless">{children}</div>
);

export const Col = ({
  n,
  children,
}: PropsWithChildren<{ n?: number | string }>) => (
  <div className={clsx("column", n != null && `is-${n}`)}>{children}</div>
);

export interface RequiredProps {
  required?: boolean;
}

export const Required: FC<RequiredProps> = ({ required }) =>
  required ? <span className="required">*</span> : null;

export type FieldLabelProps = Pick<
  WidgetProps,
  "label" | "schema" | "id" | "required" | "uiSchema"
>;

export const FieldGroup = ({ children }: PropsWithChildren) => {
  return <div className="field">{children}</div>;
};

export const FieldLabel = ({
  label,
  schema,
  id,
  required,
  uiSchema,
}: FieldLabelProps) => {
  const uiOptions = getUiOptions(uiSchema);
  const labelText = uiOptions.title || label || schema.title;

  if (!labelText) {
    return null;
  }
  return (
    <label className="label is-small" htmlFor={id}>
      {labelText}
      <Required required={required} />
    </label>
  );
};

export const FieldControl = ({ children }: PropsWithChildren) => {
  return <div className="control">{children}</div>;
};

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <article className="message is-small is-danger">{children}</article>;
};

export const ErrorMessageHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="message-header">
      <p>{children}</p>
    </div>
  );
};

export const ErrorMessageBody = ({ children }: PropsWithChildren) => {
  return <div className="message-body">{children}</div>;
};
