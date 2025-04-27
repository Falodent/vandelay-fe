import { Stack } from "@mui/material";

// components
import Entrance from "@/animated/entrance";
import HeroBanner from "./components/hero-banner";
import SignUp from "./components/signup-form";
import Typography from "@/components/typography";

// layout
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";

const SignupPage = () => {
  return (
    <Entrance className="relative lg:pt-[58.5px] pb-[52.5px] flex flex-col items-center gap-10">
      <HeroBanner />
      <Navbar />
      <Stack
        pt="15px"
        pb="26px"
        position="relative"
        spacing="9.5px"
        alignItems="center"
      >
        <Typography variant="h2" weight="bold" color="white">
          Welcome!
        </Typography>
        <Typography
          variant="span"
          className="max-w-[333px] text-center"
          color="white"
        >
          Use these awesome forms to login or create new account in your project
          for free.
        </Typography>
      </Stack>
      <SignUp />
      <Footer />
    </Entrance>
  );
};

export default SignupPage;
