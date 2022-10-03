import type { FC } from "react";
import type { IconButtonProps } from "@rjsf/utils";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import IconButton from "./IconButton";
import clsx from "clsx";

const AddButton: FC<IconButtonProps> = ({ className, ...props }) => (
  <IconButton
    title="Add Item"
    {...props}
    className={clsx(className, "is-info")}
    icon={<BsPlus />}
  />
);

export default AddButton;
