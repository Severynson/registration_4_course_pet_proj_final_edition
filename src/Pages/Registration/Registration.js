import UsernamePasswordForm from "../../UI/LoginPasswordForm";
import SecondStep from "./SecondStep/SecondStep";
import { useState } from "react";

const Registration = () => {
    const [firstStepDone, setFirstStepDone] = useState(false);
    const [secondStepDone, setSecondStepDone] = useState(false);
    const [showAfterMessage, setShowAfterMessage] = useState(false);

    const addUsernameAndPassword = (inputValues) => {
        console.log(inputValues)
        setFirstStepDone(true);
    };

  return (
    <>
    {!firstStepDone && <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />}
    {firstStepDone && !secondStepDone && <SecondStep />}
    </>
  );
};

export default Registration;