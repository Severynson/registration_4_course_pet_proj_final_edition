import LoginPasswordForm from "../../UI/LoginPasswordForm"

const LogIn = () => {
    const handleLoginAndPassword = (e) => {
        console.log(e);
    };

    return (<LoginPasswordForm type="login" sendData={handleLoginAndPassword} />);
};

export default LogIn;