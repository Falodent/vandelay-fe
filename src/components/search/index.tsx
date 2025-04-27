import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

//assets
import Icon from "@/assets/svg/search.svg";

const Search = () => {
  const { register } = useForm();

  return (
    <Box
      sx={{ height: "39.5px", width: "199px", position: "relative" }}
      role="form"
    >
      <input
        type="search"
        placeholder="Type here..."
        {...register("search")}
        className="pl-9 pr-2 w-full h-full relative rounded-[15px] border-[0.5px] border-grey-border bg-white outline-none text-xs placeholder:text-grey-100"
      />

      <Box
        component="img"
        src={Icon}
        alt="search bar"
        sx={{ position: "absolute", left: "12px", top: "12px" }}
      />
    </Box>
  );
};

export default Search;
