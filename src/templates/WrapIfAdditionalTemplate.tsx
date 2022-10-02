import type { FC } from "react";
import {
  ADDITIONAL_PROPERTY_FLAG,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils";
import { FieldGroup, FieldLabel, FieldControl, Row, Col } from "../ui";

const WrapIfAdditionalTemplate: FC<WrapIfAdditionalTemplateProps> = ({
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
}) => {
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = registry.templates.ButtonTemplates;
  const keyLabel = "Key"; // i18n ?
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  if (!additional) {
    return <div className={classNames}>{children}</div>;
  }

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value);
  const keyId = `${id}-key`;

  return (
    <Row key={keyId}>
      <Col n={3}>
        <FieldGroup>
          <FieldLabel
            id={keyId}
            label={keyLabel}
            schema={{}}
            required={required}
          />
          <FieldControl>
            <input
              className="input is-small"
              defaultValue={label}
              disabled={disabled || readonly}
              id={keyId}
              name={keyId}
              onBlur={!readonly ? handleBlur : undefined}
              type="text"
            />
          </FieldControl>
        </FieldGroup>
      </Col>
      <Col n={8}>{children}</Col>
      <Col n={1}>
        <RemoveButton
          iconType="block"
          disabled={disabled || readonly}
          onClick={onDropPropertyClick(label)}
          uiSchema={uiSchema}
        />
      </Col>
    </Row>
  );
};

export default WrapIfAdditionalTemplate;
