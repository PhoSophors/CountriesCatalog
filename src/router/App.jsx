import "../index.css";
import AllCountries from "../view/AllCountries.jsx";
import ClickTopButton from "../components/topButton/ClickTopButton.jsx";
import { Routes, Route } from "react-router-dom";
import Modal from "../components/modal/Modal.jsx";

function App() {
  return (
    <div className="App">
      <div className="bg-white dark:bg-gray-900 ">
        <Routes>
          <Route index element={<AllCountries />} />
          <Route path="/country/:countryName" element={<Modal />} />
        </Routes>
        <ClickTopButton />
      </div>
    </div>
  );
}

export default App;