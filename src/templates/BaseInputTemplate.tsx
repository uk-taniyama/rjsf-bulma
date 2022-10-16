import type { CSSProperties, FC } from "react";

import clsx from "clsx";

import { useBaseInputTemplate } from "../hooks";
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

const BaseInputTemplate: FC<WidgetProps> = (props) => {
  const {
    id,
    placeholder,
    required,
    readonly,
    disabled,
    type,
    autofocus,
    schema,
    children,
    formContext,
  } = props;
  const { inputProps, value, hasErrors, onChange, onBlur, onFocus } =
    useBaseInputTemplate(props);
  const style = getStyle(inputProps, value);

  return (
    <>
      <FieldControl>
        <input
          className={clsx(
            type === "range" ? "slider is-fullwidth has-output" : "input",
            isSmallClass(formContext),
            hasErrors && "is-danger"
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
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
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
