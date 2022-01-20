import UsernamePasswordForm from "../../UI/LoginPasswordForm";

const Registration = () => {
    const addUsernameAndPassword = (inputValues) => {
        console.log(inputValues)
    };

  return (
    <>
    <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />
    </>
  );
};

export default Registration;