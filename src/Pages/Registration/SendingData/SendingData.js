import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const SendingData = ({dataToSend}) => {
    console.log(dataToSend);

  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default SendingData;
