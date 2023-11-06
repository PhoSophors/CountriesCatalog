import Navbar from "../components/nav/Navbar";
import "../index.css";
import Hero from "../page/Hero";
import AllCountries from "../page/AllCountries";
import Footer from "../components/footer/Footer.jsx";
import ClickTopButton from "../components/topButton/ClickTopButton.jsx";

function App() {
  return (
    <div className="App">
      <div className="bg-white dark:bg-gray-900 ">
        <Navbar />
        <Hero />
        <AllCountries/>
        <Footer/>
        <ClickTopButton/>
      </div>
     
    </div>
  );
}

export default App;