import LoginPasswordForm from "../../UI/EmailPasswordForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { logIn } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

let users;

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async() => {
          const data = await getDocs(usersCollectionRef);
        users = (data.docs.map((doc) => ({
              ...doc.data()
          })))
        };
        getUsers();
    }, []);

    const handleLoginAndPassword = async (e) => {
        const {email, password} = e;
        const isUserExist = users.find(item => item.email === email && item.password === password);
        if (isUserExist !== undefined) {
            dispatch(logIn(isUserExist));
            navigate("/accountCabinet")
        } else {
            alert("Something was writen uncorrect!");
        }
    };

    return (<LoginPasswordForm type="login" sendData={handleLoginAndPassword} />);
};

export default LogIn;