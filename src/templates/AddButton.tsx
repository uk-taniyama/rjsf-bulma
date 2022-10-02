import type { FC } from "react";
import { IconButtonProps } from "@rjsf/utils";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import IconButton from "./IconButton";

const AddButton: FC<IconButtonProps> = (props) => (
  <IconButton
    title="Add Item"
    {...props}
    className="is-info"
    icon={<BsPlus />}
  />
);

export default AddButton;
