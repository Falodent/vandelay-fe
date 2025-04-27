import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";

// assets
import Facebook from "@/assets/svg/facebook.svg";
import Google from "@/assets/svg/google.svg";
import Apple from "@/assets/svg/apple.svg";

// components
import SocialLink from "../social-link";
import Input from "@/components/input";
import Button from "@/components/button";
import ToggleSwitch from "@/components/switch";
import Typography from "@/components/typography";

// types
import { SignupFields, SocialLogin } from "@/types/auth";

const SignUp = () => {
  const socialBtns: SocialLogin[] = [
    { icon: Facebook, alt: "Facebook" },
    { icon: Apple, alt: "Apple" },
    { icon: Google, alt: "Google" },
  ];

  const { register, control } = useForm<SignupFields>({
    defaultValues: {
      remember: false,
    },
  });

  return (
    <Box className="relative w-[95%] max-w-[452.5px] rounded-[15px] py-[45.5px] px-6 xl:px-[51px] flex flex-col gap-4 items-center bg-white shadow-container mb-4">
      <Stack spacing="20px" textAlign="center">
        <Typography variant="h4" weight="bold">
          Register with
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing="15px"
        >
          {socialBtns.map((item) => (
            <SocialLink icon={item.icon} alt={item.alt} key={item.alt} />
          ))}
        </Stack>

        <Typography variant="h4" weight="bold" color="grey">
          or
        </Typography>
      </Stack>

      <form className="w-full space-y-6">
        <Input
          label="Name"
          name="fullName"
          placeholder="Your full name"
          register={register("fullName")}
        />

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
          SIGN UP
        </Button>
      </form>

      <Typography variant="span" color="grey">
        Already have an account?{" "}
        <Link to="/signin" className="text-teal-100 font-bold">
          Sign in
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
