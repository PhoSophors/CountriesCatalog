import React, { useState, useEffect } from "react";
import { apiURL } from "../../api/api.js";
import { Link, useParams } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  const borders = country.map((country) => country.borders);

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
      <div className="relative Modal w-full max-h-full p-5">
        {isLoading && !error && (
          <img src="https://images.squarespace-cdn.com/content/v1/5c4a3053b98a78bea1e90622/1575486969836-DQKSYYW7F60712AGPFKV/loader.gif" />
        )}
        {error && !isLoading && <img>{error}</img>}

        {country?.map((country, id) => (
          <div
            key={id}
            className="relativ modalContainer bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="p-6 space-y-6">
              <img className="modal-img" src={country.flags.png} alt="" />
              <h1 className="text-bold leading-relaxed text-gray-700 dark:text-gray-400">
                Country Name: {country.name.official}
              </h1>
              <h1 className="text-bold leading-relaxed text-gray-700 dark:text-gray-400">
                2 character Country Code: {country.cca2} <br />3 character
                Country Code: {country.cca3} <br />
                Capital: {country.capital} <br />
                Region: {country.region} <br />
                Sub Region: {country.subregion} <br />
                Continents: {country.continents} <br />
                {/* {country.name.nativeName} <br /> */}
                Alt Spellings: {country.altSpellings} <br />
                IDD Suffixes: {country.idd.suffixes} <br />
              </h1>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Link to="/">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Modal;
