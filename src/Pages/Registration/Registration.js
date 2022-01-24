import UsernamePasswordForm from "../../UI/EmailPasswordForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import SecondStep from "./SecondStep/SecondStep";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let userData;

const Registration = () => {
    const  navigate = useNavigate();
    const usersCollectionRef = collection(db, "users");
    const [firstStepDone, setFirstStepDone] = useState(false);
    const [secondStepDone] = useState(false);

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
        navigate("/mainpage");
    };

  return (
    <>
    {!firstStepDone && <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />}
    {firstStepDone && !secondStepDone && <SecondStep sendData={addInfoAbouUser} />}
    </>
  );
};

export default Registration;