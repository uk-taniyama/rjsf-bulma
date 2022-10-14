import type { ChangeEvent, FC, FocusEvent } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { getInputProps } from "@rjsf/utils";
import clsx from "clsx";
import { FieldControl, isSmallClass } from "../ui";

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
