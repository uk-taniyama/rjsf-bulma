import { getInputProps, WidgetProps } from "@rjsf/utils";
import clsx from "clsx";
import { FieldGroup, FieldLabel, FieldControl } from "../ui";

const BaseInputTemplate = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
  uiSchema,
  children,
  extraProps,
}: WidgetProps) => {
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

  const isError = rawErrors.length > 0;
  // const classNames = [rawErrors.length > 0 ? "is-invalid" : "", type === 'file' ? 'custom-file-label': ""]
  return (
    <>
      <FieldLabel id={id} label={label} schema={schema} uiSchema={uiSchema} required={required} />
      <FieldControl>
        <input className={clsx('input', 'is-small', isError && 'is-danger')}
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
