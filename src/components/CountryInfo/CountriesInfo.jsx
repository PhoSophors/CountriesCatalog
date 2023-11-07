/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { apiURL } from "../../api/api";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";

const CountriesInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);
        if (!res.ok) throw new Error("Could not found!");
        const data = await res.json();
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    getCountryByName();
  }, [countryName]);

  return (
    <>
      {isLoading && !error && (
        <Loading/>
      )}
      {error && !isLoading && <img>{error}</img>}

      {country?.map((country, id) => (
        <div key={id} className=" dark:bg-gray-700">
          <img className="modal-img  border-dashed border-2 border-sky-500" src={country.flags.png} alt="" />
          <h1 className="mt-5 text-gray-700 dark:text-gray-400">
            <span className="text-3xl text-bold text-gray-900 dark:text-gray-100">{country.name.official}</span>
          </h1>
          <h1 className=" leading-relaxed  mt-5 text-gray-900 dark:text-gray-100">
            2 character Country Code: {country.cca2} <br />3 character Country
            Code: {country.cca3} <br />
            Capital: {country.capital} <br />
            Region: {country.region} <br />
            Sub Region: {country.subregion} <br />
            Continents: {country.continents} <br />
            {/* {country.name.nativeName} <br /> */}
            Alt Spellings: {country.altSpellings} <br />
            IDD Suffixes: {country.idd.suffixes} <br />
          </h1>
        </div>
      ))}
    </>
  );
};

export default CountriesInfo;
