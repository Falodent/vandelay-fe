import clsx from "clsx";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h6" | "p" | "span" | "label";
  weight?: "bold" | "medium" | "normal";
  color?: "dark" | "white" | "grey" | "teal" | "green" | "red";
  children: React.ReactNode;
  className?: string;
};

const baseStyles = {
  h1: "text-4xl",
  h2: "text-[32px] leading-[130%]",
  h3: "text-2xl",
  h4: "text-lg leading-[140%]",
  h6: "text-xs leading-normal",
  p: "text-base",
  span: "text-sm",
  label: "text-[10px] leading-normal",
};

const weightStyles = {
  bold: "font-bold",
  medium: "font-medium",
  normal: "font-normal leading-[130%]",
};

const colorStyles = {
  dark: "text-dark-100",
  white: "text-white",
  grey: "text-grey-100",
  teal: "text-teal-100",
  green: "text-green-100",
  red: 'text-red-100'
};

const Typography = ({
  variant = "p",
  weight = "normal",
  color = "dark",
  children,
  className,
}: TypographyProps) => {
  const Component = variant;

  return (
    <Component
      className={clsx(
        baseStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
