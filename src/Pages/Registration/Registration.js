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
        return userData = inputValues;
    };

    const addInfoAbouUser = async(inputValues) => {
        try {
            userData =  {...userData, ...inputValues}
        await addDoc(usersCollectionRef, userData);
        } catch (err) {
            alert(err);
        };
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