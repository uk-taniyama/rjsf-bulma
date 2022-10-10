import type { FC, PropsWithChildren } from "react";
import type { FormContext, UiSchema, WidgetProps } from "@rjsf/utils";
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

export function isSmall(formContext?: FormContext) {
  return formContext?.bulma?.isSmall === true;
}

export function isSmallClass(
  formContext?: FormContext,
  className = "is-small"
) {
  return isSmall(formContext) ? className : undefined;
}

export interface RowProps {
  className?: string;
}

export const Row: FC<PropsWithChildren<RowProps>> = ({
  className,
  children,
}) => <div className={clsx(className, "columns is-gapless")}>{children}</div>;

export interface ColProps {
  className?: string;
  n?: number | string;
}

export const Col: FC<PropsWithChildren<ColProps>> = ({
  n,
  className,
  children,
}) => (
  <div className={clsx(className, "column", n != null && `is-${n}`)}>
    {children}
  </div>
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

export const FieldGroup: FC<PropsWithChildren> = ({ children }) => {
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

export const FieldControl: FC<PropsWithChildren> = ({ children }) => {
  return <div className="control">{children}</div>;
};
