import { FaBath, FaBed, FaTimes, FaRulerCombined, FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PropertyInfo = ({ property }) => {
  return (
    <article>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div
          className="text-gray-500 mb-4 flex justify-center items-end gap-x-4 md:justify-start"
        >
          <FaLocationDot className="text-orange-700" />
          <p className="leading-none text-orange-700">
            {property.location.street} {property.location.city}, {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>

        <div className="flex flex-col md:flex-row justify-around">
          <div
            className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
          >
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.nightly ? `$${property.rates.nightly.toLocaleString()}` : <FaTimes className="text-red-700" />}
            </div>
          </div>
          <div
            className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
          >
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.weekly ? `$${property.rates.weekly.toLocaleString()}` : <FaTimes className="text-red-700" />}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.monthly ? `$${property.rates.monthly.toLocaleString()}` : <FaTimes className="text-red-700" />}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div
          className="flex gap-4 text-blue-500 mb-4 text-xl space-x-9"
        >
          <p className="flex gap-x-2">
            <FaBed />
            <span className="hidden sm:inline">{property.beds === 1 ? `${property.beds} Bed` : `${property.beds} Beds`}</span>
          </p>
          <p className="flex gap-x-2">
            <FaBath />
            <span className="hidden sm:inline">{property.baths === 1 ? `${property.baths} Bath` : `${property.baths} Baths`}</span>
          </p>
          <p className="flex gap-x-2">
            <FaRulerCombined />
            <span className="hidden sm:inline">{property.square_feet} sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">
          {property.description}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
        >
          {property.amenities.map((amenity, index) => (
            <li className="flex items-center gap-x-2" key={index}>
              <FaCheck className="text-green-600" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div> */}

    </article>
  );
};

export default PropertyInfo;