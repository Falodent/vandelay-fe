import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";

// components
import Button from "@/components/button";
import Input from "@/components/input";
import ToggleSwitch from "@/components/switch";
import Typography from "@/components/typography";

// types
import { SigninFields } from "@/types/auth";

const SigninForm = () => {
  const { register, control } = useForm<SigninFields>({
    defaultValues: {
      remember: false,
    },
  });

  return (
    <Box className="w-full max-w-[987.5px] px-5 lg:px-0 pb-14 lg:pb-20">
      <Box className="w-[95%] max-w-[452.5px] mx-auto lg:w-full lg:mx-0 lg:max-w-[350px] relative space-y-9">
        <Stack spacing="8.5px">
          <Typography variant="h2" weight="bold" color="teal">
            Welcome Back
          </Typography>
          <Typography variant="span" weight="bold" color="grey">
            Enter your email and password to sign in
          </Typography>
        </Stack>

        <form className="w-full space-y-6">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Your email address"
            register={register("email")}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
            register={register("password")}
          />

          <ToggleSwitch control={control} name="Remember" />

          <Button variant="form" color="teal">
            SIGN IN
          </Button>

          <Typography variant="span" color="grey">
            Don't have an account?{" "}
            <Link to="/" className="text-teal-100 font-bold">
              Sign up
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default SigninForm;
