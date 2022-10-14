import type { CSSProperties, ChangeEvent, FC, FocusEvent } from "react";

import { getInputProps } from "@rjsf/utils";
import clsx from "clsx";

import { FieldControl, isSmallClass } from "../ui";

import type { InputPropsType, WidgetProps } from "@rjsf/utils";

export function getStyle(
  inputProps: InputPropsType,
  value: any
): CSSProperties | undefined {
  if (inputProps.type !== "range") {
    return undefined;
  }
  const min = inputProps.min || 0;
  const max = inputProps.max || 100;
  const val = value || min;
  const v = ((val - min) / (max - min)) * 100;
  if (v >= 0 && v <= 100) {
    return {
      backgroundSize: v + "%",
    };
  }
  return undefined;
}

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
  formContext,
  extraProps,
}) => {
  const inputProps = { ...extraProps, ...getInputProps(schema, type, options) };
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  const isDanger = rawErrors && rawErrors.length > 0;
  const style = getStyle(inputProps, value);

  return (
    <>
      <FieldControl>
        <input
          className={clsx(
            type === "range" ? "slider is-fullwidth has-output" : "input",
            isSmallClass(formContext),
            isDanger && "is-danger"
          )}
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
          style={style}
        />
        {type === "range" && (
          <output className={clsx(isSmallClass(formContext))}>{value}</output>
        )}
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
