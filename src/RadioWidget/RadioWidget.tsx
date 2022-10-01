import { WidgetProps } from "@rjsf/utils";
import { FieldGroup, FieldControl, FieldLabel } from "../BaseInputTemplate";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  // const inline = Boolean(options && options.inline);

  return (
    <FieldGroup>
      <FieldLabel id={id} label={label} schema={schema} required={required} uiSchema={uiSchema} />
      <FieldControl>
      {Array.isArray(enumOptions) &&
        enumOptions.map((option) => {
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;
          const checked = option.value == value;

          const radio = (
            <label className="radio is-small" key={option.value}>
              <input
                className="radio"
                id={`${id}-${option.value}`}
                name={id}
                type="radio"
                disabled={disabled || itemDisabled || readonly}
                checked={checked}
                required={required}
                value={option.value}
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
              />
              {option.label}
            </label>
          );
          return radio;
        })}

      </FieldControl>
    </FieldGroup>
  );
};

export default RadioWidget;
