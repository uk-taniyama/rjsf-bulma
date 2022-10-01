import {
  ADDITIONAL_PROPERTY_FLAG,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils";
import { FieldGroup, FieldLabel } from "../ui";

const WrapIfAdditionalTemplate = ({
  classNames,
  children,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}: WrapIfAdditionalTemplateProps) => {
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = registry.templates.ButtonTemplates;
  const keyLabel = `${label} Key`; // i18n ?
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  if (!additional) {
    return <div className={classNames}>{children}</div>;
  }

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value);
  const keyId = `${id}-key`;

  return (
    <Row key={keyId}>
      <Col n={5}>
        <FieldGroup>
          <FieldLabel id={keyId} label={keyLabel} schema={{}} required={required} />
          {/* <FieldControl
            required={required}
            defaultValue={label}
            disabled={disabled || readonly}
            id={keyId}
            name={keyId}
            onBlur={!readonly ? handleBlur : undefined}
            type="text"
          /> */}
        </FieldGroup>
      </Col>
      <Col n={5}>{children}</Col>
      <Col n={2}>
        <RemoveButton
          iconType="block"
          className="w-100"
          disabled={disabled || readonly}
          onClick={onDropPropertyClick(label)}
          uiSchema={uiSchema}
        />
      </Col>
    </Row>
  );
};

export default WrapIfAdditionalTemplate;
