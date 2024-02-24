import React, { FC } from "react";

interface ButtonProps {
  label?: string;
  type: "submit" | "reset" | "button" | undefined;
  handleClick?: () => any;
  className?: string;
}

const Button: FC<ButtonProps> = ({ label, type, className, handleClick }) => {
  return (
    <button type={type} className={`${className} rounded-lg p-2`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
