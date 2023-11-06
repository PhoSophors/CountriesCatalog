import React, { useState, useEffect, useMemo, useCallback } from "react";
import { apiURL } from "../api/api.js";
import Card from "../components/card/Card.jsx";
import Hero from "./Hero.jsx";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100); // 25 * 4 = 100
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  // Fetch all countries from the API.
  const getAllCountries = useCallback(async () => {
    try {
      const res = await fetch(`${apiURL}/all`);
      // Check the status of the response from the API.
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setCountries(data); // Display the country data
      console.log(data);
      setIsLoading(false); // set loading
    } catch (error) {
      alert(error.message); // Display a message to the user
      setIsLoading(false);
    }
  }, []);

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);
      if (!res.ok) throw new Error("Not found any country!");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiURL}/region/${regionName}`);
      if (!res.ok) throw new Error("Not have a country..!");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  // Memoize the countries variable.
  const memoizedCountries = useMemo(() => countries, [countries]);
  // Calculate the start and end indices for the current page.
  const startPostIndex = (currentPage - 1) * postsPerPage;
  const endPostIndex = currentPage * postsPerPage;
  // Calculate the total number of pages.
  const totalPages = Math.ceil(memoizedCountries.length / postsPerPage);
  // Create an array of page numbers.
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // Use the start and end indices to slice the countries array.
  const slicedCountries = memoizedCountries.slice(startPostIndex, endPostIndex);

  // Function to update the current page number.
  const setPage = (page) => {
    setCurrentPage(page);
  };
  // Fetch all countries from the API when the component is first mounted.
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <>
      <div className="dark:bg-gray-900">
        {isLoading && !isError && (
          <img src="https://images.squarespace-cdn.com/content/v1/5c4a3053b98a78bea1e90622/1575486969836-DQKSYYW7F60712AGPFKV/loader.gif" />
        )}
        {isError && !isLoading && <img>{isError}</img>}

        {/* section hero (search in hero) */}
        <section className="Hero">
          <Hero onSearch={getCountryByName} onSelect={getCountryByRegion} />
        </section>

        {/* Section countries */}
        <section className="grids">
          {countries.length === 0 ? (
            <img src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif" />
          ) : (
            slicedCountries?.map((country, id) => (
              <Card
                key={id}
                img={country.flags.png}
                countryName={country.name.official}
              />
            ))
          )}
        </section>

        {/*  Section Pagination buttons */}
        <section className="pagination flex mx-auto items-center justify-center  dark:bg-gray-800 bg-gray-200 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllCountries;
