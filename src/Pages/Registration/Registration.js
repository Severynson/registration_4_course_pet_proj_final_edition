import UsernamePasswordForm from "../../UI/EmailPasswordForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import SecondStep from "./SecondStep/SecondStep";
import { useState } from "react";

let userData;

const Registration = () => {
    const usersCollectionRef = collection(db, "users");
    const [firstStepDone, setFirstStepDone] = useState(false);
    const [secondStepDone, setSecondStepDone] = useState(false);

    const addUsernameAndPassword = (inputValues) => {
        setFirstStepDone(true);
        const {email, password} = inputValues;
        return userData = inputValues;
    };

    const addInfoAbouUser = async(inputValues) => {
        userData =  {...userData, ...inputValues}
        await addDoc(usersCollectionRef, userData);
        setSecondStepDone(true);
    };

  return (
    <>
    {!firstStepDone && <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />}
    {firstStepDone && !secondStepDone && <SecondStep sendData={addInfoAbouUser} />}
    </>
  );
};

export default Registration;