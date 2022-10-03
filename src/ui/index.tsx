import type { FC, PropsWithChildren } from "react";
import type { UiSchema, WidgetProps } from "@rjsf/utils";
import { getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

export const isSmallUiSchema = {
  "ui:submitButtonOptions": {
    props: {
      className: "is-small",
    },
  },
};

function updateObject(obj: any, path: string[], setter: (value: any) => any) {
  const root = { ...obj };
  if (path.length == 0) {
    return root;
  }
  let parent = root;
  for (let i = 0; i < path.length - 1; i += 1) {
    const key = path[i];
    parent[key] = { ...parent[key] };
    parent = parent[key];
  }

  const key = path[path.length - 1];
  parent[key] = setter(parent[key]);
  return root;
}

export function createIsSmallUiSchema(uiSchema: UiSchema = {}): UiSchema {
  const key = ["ui:submitButtonOptions", "props", "className"];
  return updateObject(uiSchema, key, (value) => clsx(value, "is-small"));
}

export function isSmall(formContext: any) {
  return formContext?.bulma?.isSmall === true;
}

export function isSmallClass(formContext: any, className = "is-small") {
  return isSmall(formContext) ? className : undefined;
}

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
  "label" | "schema" | "id" | "required" | "uiSchema" | "formContext"
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
  formContext,
}: FieldLabelProps) => {
  const uiOptions = getUiOptions(uiSchema);
  const labelText = uiOptions.title || label || schema.title;

  if (!labelText) {
    return null;
  }
  return (
    <label
      className={clsx("label", isSmall(formContext) && "is-small")}
      htmlFor={id}
    >
      {labelText}
      <Required required={required} />
    </label>
  );
};

export const FieldControl = ({ children }: PropsWithChildren) => {
  return <div className="control">{children}</div>;
};
