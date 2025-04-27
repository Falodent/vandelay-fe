import {
  Avatar,
  AvatarGroup,
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
import { projectData, projectHeaders } from "@/constant/projects-data";

const ProjectsTable = () => {
  return (
    <Box className="w-full h-[519px] max-w-[1057px] pt-7 flex flex-col gap-[28.5px] bg-white shadow-active rounded-[15px] relative">
      <Box
        position="absolute"
        top="22.5px"
        right="22.5px"
        className="cursor-pointer"
      >
        <Box component="img" src={Chevron} alt="menu" />
      </Box>

      <Stack spacing="6px" pl="21px" pr="22.5px">
        <Typography variant="h4" weight="bold">
          Projects
        </Typography>

        <Stack direction="row" alignItems="center" gap="10px">
          <Box component="img" src={Check} alt="check-mark" />
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
              {projectHeaders.map((item) => (
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
            {projectData.map((project, idx) => (
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

                <TableCell className="min-w-[120px]">
                  <Stack direction="row" justifyContent="flex-start">
                    <AvatarGroup max={5} sx={{ justifyContent: "flex-start" }}>
                      {project.members.map((member, idx) => (
                        <Avatar
                          key={idx}
                          src={member}
                          sx={{ width: 20, height: 20 }}
                        />
                      ))}
                    </AvatarGroup>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography variant="span" weight="bold">
                    {project.budget}
                  </Typography>
                </TableCell>

                <TableCell className="w-[170px]">
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectsTable;
