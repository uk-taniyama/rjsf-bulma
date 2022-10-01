import { IconButtonProps } from "@rjsf/utils";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import clsx from "clsx";

const IconButton = (props: IconButtonProps) => {
  const { icon, className, iconType, uiSchema, ...other } = props;
  return (
    <button className={clsx('button is-fullwidth is-small', className)} {...other}>{icon}</button>
  );
};

export default IconButton;

export function MoveDownButton(props: IconButtonProps) {
  return <IconButton title="Move down" {...props} icon={<AiOutlineArrowDown />} />;
}

export function MoveUpButton(props: IconButtonProps) {
  return <IconButton title="Move up" {...props} icon={<AiOutlineArrowUp />} />;
}

export function RemoveButton(props: IconButtonProps) {
  return (
    <IconButton
      title="Remove"
      {...props}
      className="is-danger"
      icon={<IoIosRemove />}
    />
  );
}
