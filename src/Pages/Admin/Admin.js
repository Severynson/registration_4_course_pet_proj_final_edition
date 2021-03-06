import {
  Grid,
  Box,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { blue, teal, red } from "@mui/material/colors";
import { CheckBox, DeleteForever } from "@mui/icons-material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
const itemsBgColor = blue[200];
const checkBoxColor = teal[500];
const deniedColor = red[500];

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [typeOfUsers, setTypeOfUsers] = useState("unwatched yet");
  const usersCollectionRef = collection(db, "users");
  const [containerWidth, setContainerWidth] = useState(800);
  const [typographyFont, setTypographyFont] = useState(20);
  const [textFZ, setTextFZ] = useState(18);
  const maxW400 = useMediaQuery("(max-width: 400px)");
  const maxW500 = useMediaQuery("(max-width: 500px)");
  const maxW600 = useMediaQuery("(max-width: 600px)");
  const maxW700 = useMediaQuery("(max-width: 700px)");
  const maxW800 = useMediaQuery("(max-width: 800px)");
  const minW800 = useMediaQuery("(min-width: 800px)");

  const updateUser = async (id, acceptOrDenie) => {
    try {
      const userDoc = doc(db, "users", id);
      if (acceptOrDenie === "accept") {
        await updateDoc(userDoc, { acceptionStatus: "accepted" });
      } else {
        await updateDoc(userDoc, { acceptionStatus: "denied" });
      }
    } catch (err) {
      alert(err);
    }

    getUsers();
    getUsersWithSomeStatus(typeOfUsers);
  };

  const getUsers = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const users = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return users;
    } catch (err) {
      alert(err);
    }
  };

  const getUsersWithSomeStatus = async (acceptionStatus) => {
    const users = await getUsers();
    let unwatchedUsers = [];
    users.forEach((user) => {
      if (user.acceptionStatus === acceptionStatus)
        unwatchedUsers.push({ ...user });
    });
    setUsers(unwatchedUsers);
  };

  useEffect(() => {
    getUsersWithSomeStatus(typeOfUsers);
  }, [typeOfUsers]);

  useEffect(() => {
    if (maxW400) {
      setContainerWidth(300);
      setTypographyFont(6);
      setTextFZ(6);
    } else if (maxW500) {
      setContainerWidth(400);
      setTypographyFont(9);
      setTextFZ(9);
    } else if (maxW600) {
      setContainerWidth(500);
      setTypographyFont(12);
      setTextFZ(11);
    } else if (maxW700) {
      setContainerWidth(600);
      setTypographyFont(15);
      setTextFZ(14);
    } else if (maxW800) {
      setContainerWidth(700);
      setTypographyFont(17);
      setTextFZ(16);
    } else if (minW800) {
      setContainerWidth(800);
      setTypographyFont(20);
      setTextFZ(17);
    }
  }, [maxW400, maxW500, maxW600, maxW700, maxW800, minW800]);

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Grid
        container
        sx={{ width: `${containerWidth}px`, m: "0 auto", marginTop: "9%" }}
        columns={4}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                onClick={() => {
                  setTypeOfUsers("unwatched yet");
                  getUsersWithSomeStatus("unwatched yet");
                }}
                color="inherit"
                size="large"
              >
                Unwatched
              </Button>
              <Button
                onClick={() => {
                  setTypeOfUsers("accepted");
                  getUsersWithSomeStatus("accepted");
                }}
                color="inherit"
                size="large"
              >
                Accepted
              </Button>
              <Button
                onClick={() => {
                  setTypeOfUsers("denied");
                  getUsersWithSomeStatus("denied");
                }}
                color="inherit"
                size="large"
              >
                Denied
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid item sx={{ bgcolor: itemsBgColor }}>
          <Box display="flex" sx={{ width: `${containerWidth}px` }}>
            <Box
              border="2px solid black"
              sx={{ width: `${containerWidth / 8}px` }}
              p="10px"
            >
              <Typography sx={{ fontSize: typographyFont }} fontWeight="bold">
                Name
              </Typography>
            </Box>
            <Box
              border="2px solid black"
              sx={{ width: `${containerWidth / 8}px` }}
              p="10px"
            >
              <Typography sx={{ fontSize: typographyFont }} fontWeight="bold">
                Surname
              </Typography>
            </Box>
            <Box
              border="2px solid black"
              sx={{ width: `${containerWidth / 2}px` }}
              p="10px"
            >
              <Typography sx={{ fontSize: typographyFont }} fontWeight="bold">
                About
              </Typography>
            </Box>
            <Box
              border="2px solid black"
              sx={{ width: `${containerWidth / 4}px` }}
              p="10px"
            >
              <Typography sx={{ fontSize: typographyFont }} fontWeight="bold">
                Accept / Denie
              </Typography>
            </Box>
          </Box>
        </Grid>
        {users.map(({ name, surname, aboutYourself, id }, i) => {
          return (
            <Grid item key={i} sx={{ bgcolor: itemsBgColor }}>
              <Box
                display="flex"
                sx={{ width: `${containerWidth}px`, m: "0 auto" }}
              >
                <Box
                  border="2px solid black"
                  sx={{ width: `${containerWidth / 8}px`, fontSize: textFZ }}
                  p="10px"
                >
                  {name}
                </Box>
                <Box
                  border="2px solid black"
                  sx={{ width: `${containerWidth / 8}px`, fontSize: textFZ }}
                  p="10px"
                >
                  {surname}
                </Box>
                <Box
                  border="2px solid black"
                  sx={{ width: `${containerWidth / 2}px`, fontSize: textFZ }}
                  p="10px"
                >
                  {aboutYourself}
                </Box>
                <Box
                  border="2px solid black"
                  sx={{
                    width: `${containerWidth / 4}px`,
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                  p="10px"
                >
                  <IconButton
                    onClick={() => updateUser(id, "accept")}
                    sx={{
                      bgcolor: checkBoxColor,
                      width: `${containerWidth / 17}px`,
                      height: `${containerWidth / 17}px`,
                    }}
                  >
                    <CheckBox />
                  </IconButton>
                  <IconButton
                    onClick={() => updateUser(id, "denie")}
                    sx={{
                      bgcolor: deniedColor,
                      width: `${containerWidth / 17}px`,
                      height: `${containerWidth / 17}px`,
                    }}
                  >
                    <DeleteForever />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          );
        })}
        {users.length === 0 && (
          <Box sx={{ bgcolor: itemsBgColor, width: containerWidth, p: 3 }}>
            <Typography textAlign="center" variant="h4">
              No unwatched requests
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Admin;
