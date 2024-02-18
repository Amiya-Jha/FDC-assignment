"use client";

import React, { useState } from 'react';
import Table from './Table';
import tableData from '../data/tableData';
import { GrNext, GrPrevious } from "react-icons/gr";

const Products: React.FC = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Function to generate an array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3; // Adjust this value to change the number of visible page numbers
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= halfMaxVisiblePages) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage > totalPages - halfMaxVisiblePages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  // Get the data to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  // Function to handle page navigation
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="py-4 px-8 bg-white rounded-md shadow-md mx-8 mt-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 md:mr-28">
            <h1 className="text-xl md:text-xl font-bold mb-4 md:mb-0 md:mr-4 md:pr-48">Product Summary</h1>
            <div className="flex items-center mb-4 md:mb-0 md:mr-4">
              <p className="text-gray-600 mr-4 md:mr-2">Show</p>
              <select className="border border-gray-400 rounded px-4 py-2 md:mr-2">
                <option value="All">ALL COLUMN </option>
                <option value="All">CUSTOM SELECTION </option>
                <option value="All">CUSTOM SELECTION </option>
              </select>
            </div>
            <button className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">DISPATCH SELECTED </button>
          </div>
          <div className="flex items-center md:ml-auto md:mr-10">
            {/* Previous Button */}
            <button onClick={prevPage} disabled={currentPage === 1} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg mr-2"><GrPrevious/> </button>
            
            {/* Page Numbers */}
            <div className="flex">
              {getPageNumbers().map((page) => (
                <button key={page} onClick={() => goToPage(page)} className={`px-4 py-2 rounded-lg ${currentPage === page ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'} mr-2 md:mr-1`}>{page}</button>
              ))}
            </div>
            
            {/* Next Button */}
            <button onClick={nextPage} disabled={currentPage === totalPages} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg ml-2"><GrNext/> </button>
          </div>
        </div>
        <div>
          <Table data={currentData} />
        </div>
      </div>
    </>
  );
};

export default Products;