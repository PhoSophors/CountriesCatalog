import React from "react";

const Navbar = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 p-3 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span onClick={refreshPage} className="text-3xl text-white">
                Contry on the world
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
