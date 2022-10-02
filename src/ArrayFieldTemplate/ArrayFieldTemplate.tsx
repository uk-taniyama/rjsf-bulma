import {
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";
import { Row, Col } from "../ui";

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
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
    <div>
      <Row>
        <Col n={12}>
          <ArrayFieldTitleTemplate
            idSchema={idSchema}
            title={uiOptions.title || title}
            uiSchema={uiSchema}
            required={required}
            registry={registry}
          />
          {(uiOptions.description || schema.description) && (
            <ArrayFieldDescriptionTemplate
              idSchema={idSchema}
              description={(uiOptions.description || schema.description)!}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          <div
            className="fluid p-0 m-0"
            key={`array-item-list-${idSchema.$id}`}
          >
            {items &&
              items.map(({ key, ...itemProps }: ArrayFieldTemplateItemType) => (
                <ArrayFieldItemTemplate key={key} {...itemProps} />
              ))}
            {canAdd && (
              <div className="Container">
                <Row>
                  <Col n={9}></Col>
                  <Col n={3}>
                    <AddButton
                      className="array-item-add"
                      onClick={onAddClick}
                      disabled={disabled || readonly}
                      uiSchema={uiSchema}
                    />
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ArrayFieldTemplate;
