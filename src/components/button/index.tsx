import { clsx } from "clsx";

interface ButtonProps {
  variant: "nav" | "form" | "side";
  color: "white" | "teal" | "dark";
  children: React.ReactNode;
  type?: "button" | "submit";
}

const Button = ({ children, variant, color, type = "button" }: ButtonProps) => {
  const variantStyles = {
    nav: "w-[150px] h-[35px] rounded-[34.5px]",
    form: "w-full h-[45px] rounded-xl",
    side: "w-full h-[35px] rounded-xl",
  };

  const coloringStyles = {
    white: "bg-white text-dark-100",
    teal: "bg-teal-100 text-white",
    dark: "dark-gradient text-white",
  };

  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer font-bold text-[10px] leading-normal",
        variantStyles[variant],
        coloringStyles[color]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
