import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useMediaQuery } from "@mui/material";
import { Fragment, memo } from "react";

const articles = [
  {
    title: "About this Specialization",
    article: `This specialisation covers topics ranging from basic computing
    principles to the mathematical foundations required for computer
    science. You will learn fundamental concepts of how computers work,
    which can be applied to any software or computer system. You will also
    gain the practical skillset needed to write interactive, graphical
    programs at an introductory level. The numerical mathematics component
    will provide you with numerical and computational tools that are
    essential for the problem solving and modelling stages of computer
    science.`,
  },
  {
    title: "Applied Learning Project",
    article: `There are a range of activities included in this specialization that will enable learners to apply and develop their programming skills in a fun and engaging way. Learners will master the fundamentals of computer science by solving mathematical puzzles using interactive techniques, becoming a detective and solving crimes in an interactive sleuth application and apply computer science concepts to solve problems found in daily computer use.`,
  },
];

const Articles = () => {
  const maxW370 = useMediaQuery("(max-width: 370px)");

  return (
    <Box
      bgcolor="primary.light"
      component="article"
      sx={{
        p: 2,
        border: "3px solid silver",
        borderRadius: "20px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          right: 20,
          top: 3,
          fontStyle: "italic",
          color: "#fff",
        }}
        variant="body2"
      >
        20,270 recent views
      </Typography>
      {articles.map(({ title, article }, i) => {
        return (
          <Fragment key={i}>
            <Typography variant="h3" fontSize={!maxW370 ? `50px` : "39px"}>
              <DoneIcon fontSize="large" /> {title}
            </Typography>
            <Box
              bgcolor="#90caf9"
              component="div"
              sx={{ p: 2, borderRadius: "10px", marginBottom: "10px" }}
            >
              <Typography variant="body1">{article}</Typography>
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};

export default memo(Articles);
