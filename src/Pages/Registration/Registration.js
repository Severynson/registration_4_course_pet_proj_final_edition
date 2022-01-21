import UsernamePasswordForm from "../../UI/LoginPasswordForm";
import SecondStep from "./SecondStep/SecondStep";
import SendingData from "./SendingData/SendingData";
import { useState } from "react";

let userData;

const Registration = () => {
    const [firstStepDone, setFirstStepDone] = useState(false);
    const [secondStepDone, setSecondStepDone] = useState(false);

    const addUsernameAndPassword = (inputValues) => {
        setFirstStepDone(true);
        return userData = inputValues;
    };

    const addInfoAbouUser = (inputValues) => {
        userData =  {...userData, ...inputValues}
        setSecondStepDone(true);
    };

  return (
    <>
    {!firstStepDone && <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />}
    {firstStepDone && !secondStepDone && <SecondStep sendData={addInfoAbouUser} />}
    {firstStepDone && secondStepDone && <SendingData dataToSend={userData} />}
    </>
  );
};

export default Registration;