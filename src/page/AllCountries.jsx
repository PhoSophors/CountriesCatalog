import React, { useState, useEffect, useMemo, useCallback } from "react";
import { apiURL } from "../api/api.js";
import Card from "../components/card/Card.jsx";
import Loading from "../components/loading/Loading.jsx";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100); // 25 * 4 = 100
  const [loading, setLoading] = useState(true);

  // Fetch all countries from the API.
  const getAllCountries = useCallback(async () => {
    const res = await fetch(`${apiURL}/all`);

    // Check the status of the response from the API.
    if (!res.ok) throw new Error("Something went wrong!");

    const data = await res.json();

    setCountries(data);
    setLoading(false);
  }, []);

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

  // Display a loading spinner while the countries are being fetched from the API.
  if (loading) {
    return <Loading/>;
  }

  return (
    <section className="dark:bg-gray-900">

      <div className="grids">
        {slicedCountries?.map((country) => (
          <Card
            key={country.id}
            img={country.flags.png}
            countryName={country.name.official}
          />
        ))}
      </div>

       {/* Pagination buttons */}
       <div className="pagination flex mx-auto items-center justify-center  dark:bg-gray-800 bg-gray-200 font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={pageNumber === currentPage ? "active" : "" }
          >
            {pageNumber}
          </button>
        ))}
      </div>

    </section>
  );
};

export default AllCountries;