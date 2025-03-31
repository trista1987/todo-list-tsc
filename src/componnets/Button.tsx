import { ButtonProps } from "../type/Types";

function Button({ onChoose, buttonName}: ButtonProps) {
  return (
    <button onClick={onChoose}>{buttonName}</button>
  );
}

export default Button;
