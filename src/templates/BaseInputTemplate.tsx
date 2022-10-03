import type { FC } from "react";
import { getInputProps, WidgetProps } from "@rjsf/utils";
import clsx from "clsx";
import { FieldControl } from "../ui";

const BaseInputTemplate: FC<WidgetProps> = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors,
  children,
  extraProps,
}) => {
  const inputProps = { ...extraProps, ...getInputProps(schema, type, options) };
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const isDanger = rawErrors && rawErrors.length > 0;
  return (
    <>
      <FieldControl>
        <input
          className={clsx("input is-small", isDanger && "is-danger")}
          id={id}
          name={id}
          placeholder={placeholder}
          autoFocus={autofocus}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          list={schema.examples ? `examples_${id}` : undefined}
          {...inputProps}
          value={value || value === 0 ? value : ""}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      </FieldControl>
      {children}
      {schema.examples ? (
        <datalist id={`examples_${id}`}>
          {(schema.examples as string[])
            .concat(schema.default ? ([schema.default] as string[]) : [])
            .map((example: any) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      ) : null}
    </>
  );
};

export default BaseInputTemplate;
