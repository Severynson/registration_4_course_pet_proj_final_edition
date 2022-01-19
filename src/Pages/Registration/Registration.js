import UsernamePasswordForm from "../../UI/UsernamePasswordForm";

const Registration = () => {
    const addUsernameAndPassword = ([username, password]) => {
        console.log(username, password);
    };

  return (
    <>
    <UsernamePasswordForm type="registration" sendData={addUsernameAndPassword} />
    </>
  );
};

export default Registration;