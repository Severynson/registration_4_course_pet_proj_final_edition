import UsernamePasswordForm from "../../UI/EmailPasswordForm";
// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import SecondStep from "./SecondStep/SecondStep";
import SendingData from "./SendingData/SendingData";
import { useState } from "react";

let userData;

const Registration = () => {
    const usersCollectionRef = collection(db, "users");
    const [firstStepDone, setFirstStepDone] = useState(false);
    const [secondStepDone, setSecondStepDone] = useState(false);

    const addUsernameAndPassword = async (inputValues) => {
        // console.log(inputValues);
        // const auth = getAuth();
        setFirstStepDone(true);
        const {email, password} = inputValues;
        // const createUser = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(createUser);
        // createUser.catch(console.error);
        return userData = inputValues;
    };

    const addInfoAbouUser = async(inputValues) => {
        userData =  {...userData, ...inputValues}
        addDoc()
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