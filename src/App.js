import Layout from "./Components/Layout/Layout";
import MainPage from "./Pages/MainPage/MainPage";
import Registration from "./Pages/Registration/Registration";
import LogIn from "./Pages/LogIn/LogIn";
import Admin from "./Pages/Admin/Admin";
import { Route, Routes, Navigate } from "react-router-dom";
import "./firebase.js";
import AccountCabinet from "./Pages/AccountCabinet/AccountCabinet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Navigate to="mainpage" />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LogIn />} />
          <Route path="admin" element={<Admin />} />
          <Route path="accountCabinet" element={<AccountCabinet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
