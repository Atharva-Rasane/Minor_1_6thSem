"use client"
import React, { useState } from 'react';

const SearchForm = () => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [parameterDropdownOpen, setParameterDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const toggleParameterDropdown = () => {
    setParameterDropdownOpen(!parameterDropdownOpen);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main navbar-scroll="true">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <div>
          <h6 className="mb-0 font-bold capitalize">Filter</h6>
        </div>

        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
            </div>
          </div>
          <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
            <li className="relative flex items-center pr-2">
              <a href="#" className="block p-0 transition-all text-sm ease-nav-brand text-slate-500" onClick={toggleLocationDropdown}>
                Filter by Location <i className={`fas fa-chevron-${locationDropdownOpen ? 'up' : 'down'} ml-1`}></i>
              </a>
              {locationDropdownOpen && (
                <ul className="text-sm absolute right-0 top-full z-50 origin-top list-none rounded-lg border-0 border-solid border-gray-300 bg-white bg-clip-padding px-2 py-2 text-left text-slate-500">
                  <li><a href="#">Location 1</a></li>
                  <li><a href="#">Location 2</a></li>
                  <li><a href="#">Location 3</a></li>
                  {/* Add more locations as needed */}
                </ul>
              )}
            </li>
            <li className="relative flex items-center pr-2">
              <a href="#" className="block p-0 transition-all text-sm ease-nav-brand text-slate-500" onClick={toggleParameterDropdown}>
                Other Parameters <i className={`fas fa-chevron-${parameterDropdownOpen ? 'up' : 'down'} ml-1`}></i>
              </a>
              {parameterDropdownOpen && (
                <ul className="text-sm absolute right-0 top-full z-50 origin-top list-none rounded-lg border-0 border-solid border-gray-300 bg-white bg-clip-padding px-2 py-2 text-left text-slate-500">
                  <li><a href="#">Parameter 1</a></li>
                  <li><a href="#">Parameter 2</a></li>
                  <li><a href="#">Parameter 3</a></li>
                  {/* Add more parameters as needed */}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SearchForm;
