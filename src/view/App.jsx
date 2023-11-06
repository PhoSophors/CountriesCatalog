import Navbar from "../components/nav/Navbar";
import "../index.css";
import AllCountries from "../page/AllCountries";
import Footer from "../components/footer/Footer.jsx";
import ClickTopButton from "../components/topButton/ClickTopButton.jsx";
import { Routes, Route } from "react-router-dom";
import Modal from "../components/modal/Modal.jsx";

function App() {
  return (
    <div className="App">
      <div className="bg-white dark:bg-gray-900 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<Modal />} />
        </Routes>    
        <Footer/>
        <ClickTopButton/>
      </div>
     
    </div>
  );
}

export default App;