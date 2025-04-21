import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "contact";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  ...rest
}) => {
  // Base classes for all buttons
  const baseClasses =
    "inline-flex items-center justify-center font-manrope font-bold border-[3px] transition-all duration-200 group";

  // Variant-specific classes
  const variantClasses = {
    primary:
      "border-dark-green bg-primary text-white hover:bg-dark-green hover:text-white",
    secondary: "bg-dark-green border-primary text-white hover:bg-primary",
    contact: "bg-dark-green text-white hover:bg-transparent border-dark-green",
  };

  // Size-specific classes
  const size =
    "text-[20px] font-bold font-manrope py-[18px] px-[28px] leading-[90%] rounded-[20px]";

  // Additional conditional classes
  const widthClass = fullWidth ? "w-full" : "";
  const iconClass = icon ? "gap-2" : "";
  const flexDirectionClass =
    icon && iconPosition === "right" ? "flex-row-reverse" : "";

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    size,
    widthClass,
    iconClass,
    flexDirectionClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
};

export default Button;
