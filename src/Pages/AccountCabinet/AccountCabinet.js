import { Box, Typography, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/slices/userSlice";
const backgroundColor = blue[200];

const AccountCabinet = () => {
    const dispatch = useDispatch();
    const accountStatus = useSelector((state) => state.user.acceptionStatus);
    const navigate = useNavigate();

    return (<Box m="0 auto" mt="9%" width="400px" height="120px" sx={{bgcolor: backgroundColor, textAlign: "center", borderRadius: "15px"}} >
        <Typography p="17px" variant="h4">Acception status: {accountStatus}</Typography>
        <Button
        size="large"
        variant="outlined"
        endIcon={<LogoutIcon />}
        sx={{ m: 2, bgcolor: "#fff", width: "300px" }}
        onClick={() => {  
          dispatch(userActions.logOut());
          navigate("/mainpage")
        }}
      >
        LogOut
      </Button>
    </Box>);
};

export default AccountCabinet;