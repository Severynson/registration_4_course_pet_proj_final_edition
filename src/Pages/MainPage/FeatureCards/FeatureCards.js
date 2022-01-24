import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { memo } from "react";
import SchoolIcon from "@mui/icons-material/School";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PublicIcon from "@mui/icons-material/Public";
import MentorIcon from "@mui/icons-material/SupervisorAccount";
import RecordingIcon from "@mui/icons-material/GraphicEq";

const cards = [
  {
    icon: <SchoolIcon sx={{ fontSize: 100 }} />,
    title: "Diploma",
    description: "In the end of studing you will get our certificate",
  },
  {
    icon: <LocalAtmIcon sx={{ fontSize: 100 }} />,
    title: "Payment",
    description: "You can pay fot course how you like: by parts or at one time",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 100 }} />,
    title: "Onile",
    description: "The best location for courses is home, right!?",
  },
  {
    icon: <MentorIcon sx={{ fontSize: 100 }} />,
    title: "Mentors",
    description:
      "We have the bese mentors with more than 5 years of work experience",
  },
  {
    icon: <RecordingIcon sx={{ fontSize: 100 }} />,
    title: "Recording",
    description:
      "If you didn't have possibility to connect... You can watch record",
  },
];

const FeatureCards = () => {
  return (
    <Grid
      container
      columns={{ xs: 2, sm: 2, lg: 3, xl: 4 }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{marginBottom: "20px"}}
    >
      {cards.map(({ icon, title, description }, i) => {
        return (
          <Grid item key={i}>
            <Card sx={{ width: 200, height: 250 }}>
              <CardActionArea>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item>{icon}</Grid>
                </Grid>
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default memo(FeatureCards);
