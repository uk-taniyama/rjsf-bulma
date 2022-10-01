import { IconButtonProps } from "@rjsf/utils";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import clsx from "clsx";

const IconButton = (props: IconButtonProps) => {
  const { icon, className, iconType } = props;
  console.log(iconType);
  // <Button {...otherProps} variant={props.variant || "light"} size="sm">
  //   {icon}
  // </Button>
  return (
    <button className={clsx('button', className)}>{icon}</button>
  );
};

export default IconButton;

export function MoveDownButton(props: IconButtonProps) {
  return (
    <IconButton title="Move down" {...props} icon={<AiOutlineArrowDown />} />
  );
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
