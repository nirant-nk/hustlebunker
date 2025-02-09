import axios from "axios";
import { useState } from "react";

const CustomPlan = () => {
  const [workspaceType, setWorkspaceType] = useState("Individual");
  const basePrice = workspaceType === "Individual" ? 100 : 500;

  const [amenities, setAmenities] = useState({
    wifi: false,
    projector: false,
    whiteboard: false,
    refreshments: false,
  });

  const prices = {
    wifi: 50,
    projector: 100,
    whiteboard: 30,
    refreshments: 80,
  };

  // Calculate total price
  const totalPrice =
    basePrice +
    Object.keys(amenities).reduce((acc, key) => (amenities[key] ? acc + prices[key] : acc), 0);

  const handleCheckboxChange = (e) => {
    setAmenities({ ...amenities, [e.target.name]: e.target.checked });
  };

  const handleBooking = () => {
    const selectedAmenities = Object.keys(amenities).filter((key) => amenities[key]);

    axios
      .post("http://localhost:3031/book-custom-plan", {
        workspaceType,
        selectedAmenities,
        totalPrice,
      })
      .then(() => alert("Custom Plan Booked Successfully!"))
      .catch(() => alert("Error Booking Custom Plan"));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Create Custom Workspace Plan</h1>

      {/* Workspace Type Selection */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-1">Workspace Type:</label>
        <select
          value={workspaceType}
          onChange={(e) => setWorkspaceType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Individual">Individual (100/hour)</option>
          <option value="Team">Team (500/hour)</option>
        </select>
      </div>

      {/* Amenities Selection */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Additional Amenities</h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(prices).map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
              <input
                type="checkbox"
                name={amenity}
                checked={amenities[amenity]}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 capitalize">
                {amenity.replace(/([A-Z])/g, " $1")} (+{prices[amenity]})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Total Price & Booking */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">Total Price: {totalPrice}/hour</h2>
        <button
          onClick={handleBooking}
          className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Book Custom Plan
        </button>
      </div>
    </div>
  );
};

export default CustomPlan;
