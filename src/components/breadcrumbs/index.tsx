import { Breadcrumbs } from "@mui/material";

// components
import Typography from "../typography";

const Breadcrumb = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography variant="h6" color="grey">
        Pages
      </Typography>

      <Typography variant="h6" className="text-black">
        {pageTitle}
      </Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
