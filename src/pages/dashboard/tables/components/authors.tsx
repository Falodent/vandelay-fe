import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// components
import Typography from "@/components/typography";

// constants
import { authorHeaders, authorData } from "@/constant/authors-data";

const Authors = () => {
  return (
    <Box className="w-full pt-7 flex flex-col gap-[28.5px] bg-white shadow-active rounded-[15px] relative">
      <Typography variant="h4" weight="bold" className="pl-[21px] pr-[22.5px]">
        Authors Table
      </Typography>

      <TableContainer
        sx={{ overflowX: "auto" }}
        className="scrollbar-none sm:pl-[21px] sm:pr-[22.5px]"
      >
        <Table stickyHeader>
          <TableHead sx={{ height: "15px" }}>
            <TableRow>
              {authorHeaders.map((item) => (
                <TableCell
                  sx={{
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "#A0AEC0",
                    lineHeight: "150%",
                    textTransform: "uppercase",
                    paddingTop: "0px",
                    paddingBottom: "12.5px",
                  }}
                  key={item}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {authorData.map((author, idx) => (
              <TableRow
                key={idx}
                sx={{
                  "&:last-child td, &:last-child th": { borderBottom: 0 },
                  height: "62px",
                }}
              >
                <TableCell className="min-w-[250px]">
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="gap-[15px]"
                  >
                    <Box
                      component="img"
                      src={author.avatar}
                      alt={author.name}
                      sx={{
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                      }}
                    />

                    <Stack direction="column" spacing={0}>
                      <Typography variant="span" weight="bold">
                        {author.name}
                      </Typography>
                      <Typography variant="span" className="text-grey-300">
                        {author.email}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>

                <TableCell className="min-w-[150px]">
                  <Stack direction="column">
                    <Typography variant="span" weight="bold">
                      {author.position}
                    </Typography>
                    <Typography variant="span" className="text-grey-300">
                      {author.department}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Box
                    sx={{ width: 65, height: 25, borderRadius: 2 }}
                    bgcolor={author.status === "Online" ? "#48BB78" : "#CBD5E0"}
                    className="flex items-center justify-center"
                  >
                    <Typography variant="span" weight="bold" color="white">
                      {author.status}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography variant="span" weight="bold">
                    {author.date}
                  </Typography>
                </TableCell>

                <TableCell className="w-20">
                  <Typography
                    variant="span"
                    weight="bold"
                    className="text-grey-300"
                  >
                    Edit
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Authors;
