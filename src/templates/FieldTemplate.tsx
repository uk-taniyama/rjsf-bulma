import type { FC } from "react";
import type { FieldTemplateProps } from "@rjsf/utils";
import { getTemplate, getUiOptions } from "@rjsf/utils";
import { FieldGroup, FieldLabel } from "../ui";

const FieldTemplate: FC<FieldTemplateProps> = ({
  id,
  children,
  displayLabel,
  errors,
  help,
  rawDescription,
  classNames,
  disabled,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
  formContext,
}) => {
  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<"WrapIfAdditionalTemplate">(
    "WrapIfAdditionalTemplate",
    registry,
    uiOptions
  );
  return (
    <WrapIfAdditionalTemplate
      classNames={classNames}
      disabled={disabled}
      id={id}
      label={label}
      onDropPropertyClick={onDropPropertyClick}
      onKeyChange={onKeyChange}
      readonly={readonly}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      <FieldGroup>
        {displayLabel && (
          <FieldLabel
            id={id}
            label={label}
            schema={schema}
            uiSchema={uiSchema}
            required={required}
            formContext={formContext}
          />
        )}
        {children}
        {displayLabel && rawDescription && (
          <div className="help">{rawDescription}</div>
        )}
        {errors}
        {help}
      </FieldGroup>
    </WrapIfAdditionalTemplate>
  );
};

export default FieldTemplate;
