import { Backdrop, CircularProgress } from "@mui/material";

const LazyLoading = () => {
  return (
    <Backdrop
      open={true}
      sx={{ color: "#4fd1c5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LazyLoading;
