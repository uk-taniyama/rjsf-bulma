import type { FC } from "react";
import { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { Row, Col } from "../ui";

const ArrayFieldItemTemplate: FC<ArrayFieldTemplateItemType> = (props) => {
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
  return (
    <Row style={{ alignItems: "flex-end" }}>
      <Col n={9}>{children}</Col>
      <Col n={3}>
        {hasToolbar && (
          <div className="field has-addons">
            <p className="control" style={{ width: "100%" }}>
              <MoveUpButton
                className="array-item-move-up"
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control" style={{ width: "100%" }}>
              <MoveDownButton
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control" style={{ width: "100%" }}>
              <RemoveButton
                disabled={disabled || readonly || !hasRemove}
                onClick={onDropIndexClick(index)}
                uiSchema={uiSchema}
              />
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ArrayFieldItemTemplate;
