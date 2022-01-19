import "./App.css";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
