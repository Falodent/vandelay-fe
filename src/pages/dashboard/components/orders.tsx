import { Box, Stack } from "@mui/material";
import clsx from "clsx";

// components
import Typography from "@/components/typography";

// constants
import { ordersOverview } from "@/constant/order-data";

const OrdersOverview = () => {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "15px",
        width: "100%",
      }}
      className="xl:max-w-[519px] shadow-active h-[519px] pl-[21px] pr-[22.5px] pt-7 pb-[31px] flex flex-col gap-[35px]"
    >
      <Stack direction="column" spacing="6px">
        <Typography variant="h4" weight="bold">
          Orders overview
        </Typography>
        <Typography variant="span" color="green" weight="bold">
          +30%{" "}
          <Typography variant="span" color="grey">
            this month
          </Typography>
        </Typography>
      </Stack>

      <Stack direction="column" spacing="5.5px">
        {ordersOverview.map((item, index, orders) => (
          <Stack direction="row" width="100%" spacing="19px" key={index}>
            <Stack spacing="6.5px" alignItems="center">
              {item.icon}

              <div
                className={clsx(
                  "w-1 rounded-[15px] bg-grey-border",
                  index >= orders.length - 1 ? "h-4.5" : "h-[37px]"
                )}
              />
            </Stack>

            <Stack spacing="4.5px">
              <Typography variant="span" weight="bold">
                {item.title}
              </Typography>
              <Typography variant="h6" weight="bold" color="grey">
                {item.date}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default OrdersOverview;
