import LoginPasswordForm from "../../UI/EmailPasswordForm";
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const LogIn = () => {
    const handleLoginAndPassword = async (e) => {
        const {email, password} = e;
        console.log(e);
        // const auth = getAuth();
        // console.log(auth);
        // const signIn = await signInWithEmailAndPassword(auth, email, password);
        // console.log(signIn)
    
    };

    return (<LoginPasswordForm type="login" sendData={handleLoginAndPassword} />);
};

export default LogIn;