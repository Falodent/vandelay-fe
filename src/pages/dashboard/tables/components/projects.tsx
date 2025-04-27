import {
  Box,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// assets
import Check from "@/assets/svg/check.svg";
import Chevron from "@/assets/svg/chevron.svg";

// components
import Typography from "@/components/typography";

// constant
import { projectData, variantProjectHeaders } from "@/constant/projects-data";

const Projects = () => {
  return (
    <Box className="w-full pt-7 flex flex-col gap-[28.5px] bg-white shadow-active rounded-[15px] relative">
      <Stack spacing="6px" pl="21px" pr="22.5px">
        <Typography variant="h4" weight="bold">
          Projects
        </Typography>

        <Stack direction="row" spacing="2.5px">
          <Box component="img" src={Check} alt="check mark" />
          <Typography variant="span" color="grey" weight="bold">
            30 done{" "}
            <Typography variant="span" color="grey">
              this month
            </Typography>
          </Typography>
        </Stack>
      </Stack>

      <TableContainer
        sx={{ overflowX: "auto" }}
        className="scrollbar-none sm:pl-[21px] sm:pr-[22.5px]"
      >
        <Table stickyHeader>
          <TableHead sx={{ height: "15px" }}>
            <TableRow>
              {variantProjectHeaders.map((item) => (
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
            {projectData.slice(0, 5).map((project, idx) => (
              <TableRow
                key={idx}
                sx={{
                  "&:last-child td, &:last-child th": { borderBottom: 0 },
                  height: "62px",
                }}
              >
                <TableCell className="min-w-[270px]">
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="gap-[17px]"
                  >
                    <Box
                      component="img"
                      src={project.logo}
                      alt={project.company}
                      sx={{
                        width: 20,
                        height: 19.5,
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="span" weight="bold">
                      {project.company}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell className="2xl:w-[320px]">
                  <Typography variant="span" weight="bold">
                    {project.budget}
                  </Typography>
                </TableCell>

                <TableCell className="2xl:w-[280px]">
                  <Typography variant="span" weight="bold">
                    {project.status}
                  </Typography>
                </TableCell>

                <TableCell className="w-52 2xl:w-[270px]">
                  <Stack spacing={0} className="gap-[4.5px]">
                    <Typography color="teal" variant="span" weight="bold">
                      {project.completion}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={project.completion}
                      sx={{
                        width: 125,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: "#E2E8F0",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#4FD1C5",
                        },
                      }}
                    />
                  </Stack>
                </TableCell>

                <TableCell className="w-15">
                  <div className="w-15 cursor-pointer">
                    <img src={Chevron} alt="vertical chevron" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Projects;
