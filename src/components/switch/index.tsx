import { Stack, Switch, styled } from "@mui/material";
import { Controller, Control } from "react-hook-form";

// components
import Typography from "../typography";

interface ToggleSwitchProps {
  control: Control<any>;
  name: string;
}

const SwitchToggle = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 18.5,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2.5,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#4FD1C5",
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.5,
    },
  },
  "& .MuiSwitch-thumb": {
    width: 13.5,
    height: 13.5,
    borderRadius: 13.5,
  },
  "& .MuiSwitch-track": {
    borderRadius: 18.5 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const ToggleSwitch = ({ control, name }: ToggleSwitchProps) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      gap="10px"
      role="switch"
      aria-label="Toggle Switch"
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SwitchToggle
            {...field}
            checked={field.value || false}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />

      <Typography variant="h6">Remember me</Typography>
    </Stack>
  );
};

export default ToggleSwitch;
