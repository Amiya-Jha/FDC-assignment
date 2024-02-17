import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Search: React.FC = () => {
  return (
    <div className="py-4 px-8 bg-white rounded-md shadow-md mx-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 sm:w-[40vw] relative">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            What are you looking for?
          </p>
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="search for category, company, name, etc."
              className=" bg-zinc-100 border-gray-400 rounded-lg pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mb-4 sm:mb-0 sm:ml-1 sm:w-[16vw]">
          <p className="text-lg font-semibold text-gray-800 mb-2">Category</p>
          <select className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="All">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <div className="mb-4 sm:mb-0 sm:ml-1 sm:w-[16vw]">
          <p className="text-lg font-semibold text-gray-800 mb-2">Status</p>
          <select className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button className="bg-zinc-100 hover:bg-zinc-400 text-zinc-600 py-2 px-2 mt-9 rounded-lg ml-0">
          <FaAnglesDown />
        </button>
        <button
          className="bg-blue-800 hover:bg-blue-500 text-white text-sm py-2 px-8 mt-9 rounded-lg ml-0"
          style={{ minWidth: "150px" }}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Search;
