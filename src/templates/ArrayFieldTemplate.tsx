import type { FC } from "react";

import { getTemplate, getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

import { Col, Row, isSmallClass } from "../ui";

import type {
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
} from "@rjsf/utils";

const ArrayFieldTemplate: FC<ArrayFieldTemplateProps> = (props) => {
  const {
    canAdd,
    disabled,
    idSchema,
    uiSchema,
    items,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
    formContext,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldDescriptionTemplate =
    getTemplate<"ArrayFieldDescriptionTemplate">(
      "ArrayFieldDescriptionTemplate",
      registry,
      uiOptions
    );
  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate">(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions
  );
  const ArrayFieldTitleTemplate = getTemplate<"ArrayFieldTitleTemplate">(
    "ArrayFieldTitleTemplate",
    registry,
    uiOptions
  );
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;
  return (
    <>
      <Row>
        <Col>
          <ArrayFieldTitleTemplate
            schema={schema}
            idSchema={idSchema}
            uiSchema={uiSchema}
            title={uiOptions.title || title}
            required={required}
            registry={registry}
          />
        </Col>
      </Row>
      {(uiOptions.description || schema.description) && (
        <Row>
          <Col>
            <ArrayFieldDescriptionTemplate
              schema={schema}
              idSchema={idSchema}
              uiSchema={uiSchema}
              description={(uiOptions.description || schema.description)!}
              registry={registry}
            />
          </Col>
        </Row>
      )}
      {items &&
        items.map(({ key, ...itemProps }: ArrayFieldTemplateItemType) => (
          <Row key={key}>
            <Col>
              <ArrayFieldItemTemplate key={key} {...itemProps} />
            </Col>
          </Row>
        ))}
      {canAdd && (
        <Row>
          <Col></Col>
          <Col n="narrow">
            <AddButton
              className={clsx("array-item-add", isSmallClass(formContext))}
              onClick={onAddClick}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default ArrayFieldTemplate;
