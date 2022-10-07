import type { FC } from "react";
import type { IconButtonProps } from "@rjsf/utils";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import IconButton from "./IconButton";
import clsx from "clsx";

const AddButton: FC<IconButtonProps> = ({ className, ...props }) => (
  <IconButton
    title="Add Item"
    {...props}
    className={clsx(className, "is-info")}
    icon={<FaPlus />}
  />
);

export default AddButton;
