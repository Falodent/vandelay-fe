import { Stack } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegisterReturn;
  placeholder: string;
}

const Input = ({
  label,
  name,
  type = "text",
  register,
  placeholder,
}: InputProps) => {
  return (
    <Stack spacing="5.5px">
      <label htmlFor={name} className="text-sm leading-[140%] text-dark-100">
        {label}
      </label>

      <input
        type={type}
        className="w-full h-[50px] px-5 outline-none border border-grey-border rounded-[15px] text-sm placeholder:text-grey-100"
        placeholder={placeholder}
        {...register}
      />
    </Stack>
  );
};

export default Input;
