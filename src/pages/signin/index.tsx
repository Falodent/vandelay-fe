// components
import HeroBanner from "./components/hero-banner";
import SigninForm from "./components/signin-form";
import Entrance from "@/animated/entrance";

// layouts
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";

const SignInPage = () => {
  return (
    <Entrance className="relative lg:pt-6 pb-10 flex flex-col items-center gap-10 sm:gap-20 lg:gap-[188px]">
      <HeroBanner />
      <Navbar variant="dark" />
      <SigninForm />
      <Footer />
    </Entrance>
  );
};

export default SignInPage;
