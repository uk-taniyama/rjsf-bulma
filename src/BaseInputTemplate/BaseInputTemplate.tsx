import { getInputProps, getUiOptions, WidgetProps } from "@rjsf/utils";
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

  // const classNames = [rawErrors.length > 0 ? "is-invalid" : "", type === 'file' ? 'custom-file-label': ""]
  return (
    <div className="field">
      <div className={rawErrors.length > 0 ? "text-danger" : ""}>
        <FieldLabel id={id} label={label} schema={schema} uiSchema={uiSchema} required={required} />
        <FieldControl>
          <input className="input is-small"
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
      </div>
    </div>
  );
};

export default BaseInputTemplate;
