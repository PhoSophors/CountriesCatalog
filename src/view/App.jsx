import Navbar from "../components/nav/Navbar";
import "../index.css";
import Hero from "../page/Hero";
import AllCountries from "../page/AllCountries";
import { useState, useEffect } from "react";
import { apiURL } from "../api/api";

function App() {
  // set loading 
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(`${apiURL}/all`);

    // if respone not okay, will alert error messange "Something went wrong!"
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await res.json();

    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <AllCountries countries={countries}/>
    </div>
  );
}

export default App;
