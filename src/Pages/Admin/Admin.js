import { Grid, Box } from "@mui/material";

const DUMMY_USERLIST = [
    {
        name: "Severyn", surname: "Kurach", aboutYourself: "Hi, I'm Severyn! Want to study a lot! Please, let me in..."
    },
    {
        name: "Roman", surname: "Nihto", aboutYourself: "Hi, I'm boring! Don't want to study at all! Let me in if you want))"
    },
    {
        name: "Syava", surname: "Krasava", aboutYourself: "Hi, I'm very cool guy, but lazy! Want to study a lot! Please, let me in..."
    },
];

const Admin = () => {
    return ( <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {DUMMY_USERLIST.map((item, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <p>{item.name}</p>
            </Grid>
          ))}
        </Grid>
      </Box>);
};

export default Admin;