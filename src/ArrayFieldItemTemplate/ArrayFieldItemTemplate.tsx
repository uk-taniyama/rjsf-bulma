import { CSSProperties } from "react";
import { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { Row, Col } from "../ui";

const ArrayFieldItemTemplate = (props: ArrayFieldTemplateItemType) => {
  const {
    children,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    index,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props;
  const { MoveDownButton, MoveUpButton, RemoveButton } =
    registry.templates.ButtonTemplates;
  const btnStyle: CSSProperties = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold",
  };
  return (
    <Row>
      <Col n={9}>
        {children}
      </Col>
      <Col n={3}>
        {hasToolbar && (
          <div className="d-flex flex-row">
            {(hasMoveUp || hasMoveDown) && (
              <div className="m-0 p-0">
                <MoveUpButton
                  className="array-item-move-up"
                  style={btnStyle}
                  disabled={disabled || readonly || !hasMoveUp}
                  onClick={onReorderClick(index, index - 1)}
                  uiSchema={uiSchema}
                />
              </div>
            )}
            {(hasMoveUp || hasMoveDown) && (
              <div className="m-0 p-0">
                <MoveDownButton
                  style={btnStyle}
                  disabled={disabled || readonly || !hasMoveDown}
                  onClick={onReorderClick(index, index + 1)}
                  uiSchema={uiSchema}
                />
              </div>
            )}
            {hasRemove && (
              <div className="m-0 p-0">
                <RemoveButton
                  style={btnStyle}
                  disabled={disabled || readonly}
                  onClick={onDropIndexClick(index)}
                  uiSchema={uiSchema}
                />
              </div>
            )}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ArrayFieldItemTemplate;
