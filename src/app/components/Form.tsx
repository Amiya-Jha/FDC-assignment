import React from "react";

interface FormProps {
  onClose: () => void; // Function to close the form
}

const Form: React.FC<FormProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    onClose(); // Close the form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10"
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">
          ORDER DETAILS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label htmlFor="id" className="block mb-2 text-gray-800">
                ID:
              </label>
              <input
                type="number"
                id="id"
                name="id"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shpiify" className="block mb-2 text-gray-800">
                SHPIIFY:
              </label>
              <input
                type="number"
                id="shpiify"
                name="shpiify"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="customerName"
                className="block mb-2 text-gray-800"
              >
                Customer Name:
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-800">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input border border-gray-300"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="country" className="block mb-2 text-gray-800">
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shipping" className="block mb-2 text-gray-800">
                Shipping:
              </label>
              <input
                type="text"
                id="shipping"
                name="shipping"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="source" className="block mb-2 text-gray-800">
                Source:
              </label>
              <input
                type="text"
                id="source"
                name="source"
                required
                className="form-input border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="orderType" className="block mb-2 text-gray-800">
                Order Type:
              </label>
              <input
                type="text"
                id="orderType"
                name="orderType"
                required
                className="form-input border border-gray-300"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
