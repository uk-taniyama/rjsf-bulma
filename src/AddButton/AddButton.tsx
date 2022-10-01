import React from "react";
import { IconButtonProps } from "@rjsf/utils";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";

const AddButton: React.ComponentType<IconButtonProps> = ({
  uiSchema,
  ...props
}) => (
  <button
    {...props}
    style={{ width: "100%" }}
    className={`ml-1 ${props.className}`}
    title="Add Item"
  >
    <BsPlus />
  </button>
);

export default AddButton;
