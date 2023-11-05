import React from "react";
import { useState, useEffect } from "react";
import { apiURL } from "../api/api.js";
import Card from "../components/card/Card.jsx";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  // function is called to fetch all countries from the API.
  const getAllCountries = async () => {
    const res = await fetch(`${apiURL}/all`);
    // check the status of the response from the API.
    if (!res.ok) throw new Error("Something went wrong!");
    const data = await res.json();

    console.log(data); 
    setCountries(data);
  };

  //  fetch all countries from the API when the component is first mounted.
  useEffect(() => {
    getAllCountries();
  }, []);

  /**
   * Requirements
   * Flags (Please use png file within flags property)
   * Country Name (name.official)
   * Pagination (25 rows per page)
   */

  return (
    <section className="grids  dark:bg-gray-900">
        {countries?.map((country) => (
          <Card
            key={country.id}
            img={country.flags.png}
            countryName={country.name.official}
          />
        ))}
    </section>
  );
};

export default AllCountries;
