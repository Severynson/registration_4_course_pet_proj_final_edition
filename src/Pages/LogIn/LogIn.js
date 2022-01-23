import LoginPasswordForm from "../../UI/EmailPasswordForm";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
let users;

const LogIn = () => {
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async() => {
          const data = await getDocs(usersCollectionRef);
          console.log(data);
        users = (data.docs.map((doc) => ({
              ...doc.data()
          })))
        };
        getUsers();
    }, [])

    const handleLoginAndPassword = async (e) => {
        const {email, password} = e;
        console.log(e);
        users.find(item => item.email === email && item.password === password);
    };

    return (<LoginPasswordForm type="login" sendData={handleLoginAndPassword} />);
};

export default LogIn;