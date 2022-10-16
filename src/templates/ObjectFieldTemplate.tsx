import type { FC } from "react";

import { canExpand, getTemplate, getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

import { Col, Row, isSmallClass } from "../ui";

import type { ObjectFieldTemplateProps } from "@rjsf/utils";

const ObjectFieldTemplate: FC<ObjectFieldTemplateProps> = ({
  description: _description,
  title: _title,
  properties,
  required,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick,
  disabled,
  readonly,
  registry,
}) => {
  const { formContext } = registry;
  const uiOptions = getUiOptions(uiSchema);
  const TitleFieldTemplate = getTemplate<"TitleFieldTemplate">(
    "TitleFieldTemplate",
    registry,
    uiOptions
  );
  const DescriptionFieldTemplate = getTemplate<"DescriptionFieldTemplate">(
    "DescriptionFieldTemplate",
    registry,
    uiOptions
  );
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;
  const title = uiOptions.title || _title;
  const description = uiOptions.description || _description;
  return (
    <>
      {title && (
        <Row>
          <Col>
            <TitleFieldTemplate
              id={`${idSchema.$id}-title`}
              schema={schema}
              title={title}
              required={required}
              registry={registry}
              uiSchema={uiSchema}
            />
          </Col>
        </Row>
      )}
      {description && (
        <Row>
          <Col>
            <DescriptionFieldTemplate
              id={`${idSchema.$id}-description`}
              schema={schema}
              description={description}
              registry={registry}
            />
          </Col>
        </Row>
      )}
      {properties.map((element, index) => (
        <Row key={index}>
          <Col>{element.content}</Col>
        </Row>
      ))}
      {canExpand(schema, uiSchema, formData) && (
        <Row>
          <Col></Col>
          <Col n="narrow">
            <AddButton
              onClick={onAddClick(schema)}
              disabled={disabled || readonly}
              className={clsx(
                "object-property-expand",
                isSmallClass(formContext)
              )}
              uiSchema={uiSchema}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default ObjectFieldTemplate;
