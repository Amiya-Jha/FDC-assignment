"use client";

import React, { useState } from "react";
import Form from "./Form"; // Import the Form component
import { FaRegEdit } from "react-icons/fa";

interface TableProps {
  data: {
    id: number;
    shpiify: number;
    date: string;
    status: string;
    customerName: string;
    email: string;
    country: string;
    shipping: string;
    source: string;
    orderType: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState); // Use functional update for state toggle
  };

  return (
    <div>
      {isFormOpen && <div className="overlay" onClick={toggleForm}></div>}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                SHPIIFY#
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Shipping
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Source
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Type
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {""}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 whitespace-nowrap">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
                <td className="px-5 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.shpiify}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  {item.customerName}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.country}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.shipping}</td>
                <td className="px-5 py-4 whitespace-nowrap">{item.source}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  {item.orderType}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <button
                    className="text-zinc-500 hover:text-blue-500"
                    onClick={toggleForm}
                    title="Edit"
                  >
                    <FaRegEdit />
                  </button>
                  {isFormOpen && <Form onClose={toggleForm} />}{" "}
                  {/* Render Form component */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
