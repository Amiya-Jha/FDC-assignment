import React from "react";
import Table from "./Table";
import tableData from "../data/tableData";

const Products: React.FC = () => {
  return (
    <>
      <div className="py-4 px-8 bg-white rounded-md shadow-md mx-8 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 md:mr-28">
            <h1 className="text-xl md:text-xl font-bold mb-4 md:mb-0 md:mr-4">
              Product Summary
            </h1>
            <div className="flex items-center mb-4 md:mb-0 md:mr-4 md:pl-48">
              <label className="text-gray-600 md:mr-2">Show</label>
              <select className="border border-gray-400 text-sm rounded font-semibold px-4 py-2 md:mr-2 mx-4">
                <option value="All">ALL COLUMN</option>
                <option value="selected">CUSTOM SELECTION</option>
                <option value="selected">CUSTOM SELECTION</option>
                <option value="selected">CUSTOM SELECTION</option>
              </select>
            </div>
            <button className="bg-blue-800 hover:bg-blue-500 text-white text-sm py-2 px-5 rounded-lg">
              DISPATCH SELECTED
            </button>
          </div>
          <div className="flex items-center md:ml-auto">
            {/* Pagination component */}
          </div>
        </div>
        <div>
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
};

export default Products;
