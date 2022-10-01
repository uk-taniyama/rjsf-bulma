import { getUiOptions, WidgetProps } from "@rjsf/utils";
import { PropsWithChildren } from "react";

export const Row = ({ children }: PropsWithChildren) => <div className="columns is-gapless">{children}</div>;
export const Col = ({ n, children }: PropsWithChildren<{ n: number }>) => <div className={`column is-${n}`}>{children}</div>;

export type FieldLabelProps = Pick<WidgetProps, "label" | "schema" | "id" | "required" | "uiSchema">;

export const FieldGroup = ({ children }: PropsWithChildren) => {
  return <div className="field">{children}</div>;
};

export const FieldLabel = ({ label, schema, id, required, uiSchema }: FieldLabelProps) => {
  const uiOptions = getUiOptions(uiSchema);
  const labelText = uiOptions.title || label || schema.title;

  if (!labelText) {
    return null;
  }
  return (
    <label className="label is-small" htmlFor={id}>
      {labelText}
      {required && <span className="required">*</span>}
    </label>
  );
};

export const FieldControl = ({ children }: PropsWithChildren) => {
  return <div className="control">{children}</div>;
};

export const Card = ({ children }:PropsWithChildren) => {
  return <div className="card is-danger">{children}</div>;
};

export const CardHeader = ({ children }:PropsWithChildren) => {
  return <div className="card-header"><div className="card-header-title">{children}</div></div>;
};

export const CardContent = ({ children }:PropsWithChildren) => {
  return <div className="card-content">{children}</div>;
};

// card: the main container
// card-header: a horizontal bar with a shadow
// card-header-title: a left-aligned bold text
// card-header-icon: a placeholder for an icon
// card-image: a fullwidth container for a responsive image
// card-content: a multi-purpose container for any other element
// card-footer: a horizontal list of controls
// card-footer-item: a repeatable list item
