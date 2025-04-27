import { SocialLogin } from "@/types/auth";

const SocialLink = ({ icon, alt }: SocialLogin) => {
  return (
    <button
      type="button"
      className="w-[75px] h-[75px] border border-grey-border rounded-[15px] flex items-center justify-center cursor-pointer"
      aria-label={alt}
    >
      <img src={icon} alt={alt} className="w-8 h-8" />
    </button>
  );
};

export default SocialLink;
