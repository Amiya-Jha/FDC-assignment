"use client";

import React, { useState } from "react";
import Form from "./Form"; // Import the Form component

const Header: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState); // Use functional update for state toggle
  };

  return (
    <div>
      {/* Applying the overlay class based on the form state */}
      {isFormOpen && <div className="overlay" onClick={toggleForm}></div>}
      <div className="flex justify-between items-center py-4 mx-8 text-black">
        <h1 className="text-xl font-bold">Orders</h1>
        <button
          className="bg-blue-800 hover:bg-blue-500 text-white text-sm py-2 px-7 mx-8 rounded-lg"
          onClick={toggleForm}
          title="Add New Product Order"
        >
          CREATE NEW
        </button>
        {isFormOpen && <Form onClose={toggleForm} />}{" "}
        {/* Render Form component only when form is open */}
      </div>
    </div>
  );
};

export default Header;
