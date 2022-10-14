import type { FC } from "react";

import { canExpand, getTemplate, getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

import { Col, Row, isSmallClass } from "../ui";

import type { ObjectFieldTemplateProps } from "@rjsf/utils";

const ObjectFieldTemplate: FC<ObjectFieldTemplateProps> = ({
  description,
  title,
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
  return (
    <>
      {(uiOptions.title || title) && (
        <Row>
          <Col>
            <TitleFieldTemplate
              id={`${idSchema.$id}-title`}
              schema={schema}
              title={uiOptions.title || title}
              required={required}
              registry={registry}
              uiSchema={uiSchema}
            />
          </Col>
        </Row>
      )}
      {(uiOptions.description || description) && (
        <Row>
          <Col>
            <DescriptionFieldTemplate
              id={`${idSchema.$id}-description`}
              schema={schema}
              description={uiOptions.description || description!}
              registry={registry}
            />
          </Col>
        </Row>
      )}
      {properties.map((element: any, index: number) => (
        <Row key={index}>
          <Col>{element.content}</Col>
        </Row>
      ))}
      {canExpand(schema, uiSchema, formData) ? (
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
      ) : null}
    </>
  );
};

export default ObjectFieldTemplate;
