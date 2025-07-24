import updateProperty from "@/app/actions/update-property";


const propertyTypes = [
  "Apartment",
  "Condo",
  "House",
  "Cabin Or Cottage",
  "Room",
  "Studio",
  "Chalet",
  "Other"
];

const amenities = [
  "Wifi",
  "Full kitchen",
  "Washer & Dryer",
  "Free Parking",
  "Swimming Pool",
  "Hot Tub",
  "24/7 Security",
  "Wheelchair Accessible",
  "Elevator Access",
  "Dishwasher",
  "Gym/Fitness Center",
  "Air Conditioning",
  "Balcony/Patio",
  "Smart TV",
  "Coffer Maker",
  "Fireplace",
  "Outdoor Grill/BBQ",
  "High-Speed Internet",
  "Beach Access",
  "Hiking Trails Access",
  "Pet-Friendly",
  "Ski Equipment Storage",
  "Mountain View",
];

const UpdatePropertyForm = ({property}) => {
  const updatePropertyById = updateProperty.bind(null, property._id);

  return (
    <form action={updatePropertyById}>
      <h2 className="text-3xl text-center font-semibold mb-6">Update Property</h2>

      {/* <!-- Property Type --> */}
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Property Type</label>
        <select id="type" name="type" className="border rounded w-full py-2 px-3" defaultValue={property.type} required>
          {propertyTypes.map((propertyType, index) => (
            <option key={index} value={propertyType}>{propertyType}</option>
          ))}
        </select>
      </div>

      {/* <!-- Listing Name --> */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Listing Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. Beautiful Apartment In Miami"
          required
          defaultValue={property.name}
        />
      </div>

      {/* <!-- Description --> */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add an optional description of your property"
          defaultValue={property.description}
        ></textarea>
      </div>

      {/* <!-- Location --> */}
      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input type="text" id="street" name="location.street" className="border rounded w-full py-2 px-3 mb-2" placeholder="Street" defaultValue={property.location.street} />
        <input type="text" id="city" name="location.city" className="border rounded w-full py-2 px-3 mb-2" placeholder="City" required defaultValue={property.location.city} />
        <input type="text" id="state" name="location.state" className="border rounded w-full py-2 px-3 mb-2" placeholder="State" required defaultValue={property.location.state} />
        <input type="text" id="zipcode" name="location.zipcode" className="border rounded w-full py-2 px-3 mb-2" placeholder="Zipcode" defaultValue={property.location.zipcode} />
      </div>

      {/* <!-- Beds, Baths, Sq Ft --> */}
      <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-1/3 pr-2">
          <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">Beds</label>
          <input type="number" id="beds" name="beds" className="border rounded w-full py-2 px-3" required defaultValue={property.beds} />
        </div>
        <div className="w-full sm:w-1/3 px-2">
          <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">Baths</label>
          <input type="number" id="baths" name="baths" className="border rounded w-full py-2 px-3" required defaultValue={property.baths} />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <label htmlFor="square_feet" className="block text-gray-700 font-bold mb-2">Square Feet</label>
          <input type="number" id="square_feet" name="square_feet" className="border rounded w-full py-2 px-3" required defaultValue={property.square_feet} />
        </div>
      </div>

      {/* <!-- Amenities --> */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amenities.map((amenity, index) => (
            <li key={index}>
              <input className="mr-2" type="checkbox" id={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`} name="amenities" value={amenity} defaultChecked={property.amenities.includes(amenity)} />
              <label htmlFor={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`}>
                {amenity}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- Rates --> */}
      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Rates (Leave blank if not applicable)</label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <label htmlFor="nightly_rate" className="mr-2">Nightly</label>
            <input type="number" id="nightly_rate" name="rates.nightly" className="border rounded w-full py-2 px-3" defaultValue={property.rates.nightly}/>
          </div>
          <div className="flex items-center">
            <label htmlFor="weekly_rate" className="mr-2">Weekly</label>
            <input type="number" id="weekly_rate" name="rates.weekly" className="border rounded w-full py-2 px-3" defaultValue={property.rates.weekly} />
          </div>
          <div className="flex items-center">
            <label htmlFor="monthly_rate" className="mr-2">Monthly</label>
            <input type="number" id="monthly_rate" name="rates.monthly" className="border rounded w-full py-2 px-3" defaultValue={property.rates.monthly} />
          </div>
        </div>
      </div>

      {/* <!-- Seller Info --> */}
      <div className="mb-4">
        <label htmlFor="seller_name" className="block text-gray-700 font-bold mb-2">Seller Name</label>
        <input type="text" id="seller_name" name="seller_info.name" className="border rounded w-full py-2 px-3" placeholder="Name" defaultValue={property.seller_info.name} />
      </div>
      <div className="mb-4">
        <label htmlFor="seller_email" className="block text-gray-700 font-bold mb-2">Seller Email</label>
        <input type="email" id="seller_email" name="seller_info.email" className="border rounded w-full py-2 px-3" placeholder="Email address" required defaultValue={property.seller_info.email} />
      </div>
      <div className="mb-4">
        <label htmlFor="seller_phone" className="block text-gray-700 font-bold mb-2">Seller Phone</label>
        <input type="tel" id="seller_phone" name="seller_info.phone" className="border rounded w-full py-2 px-3" placeholder="Phone" defaultValue={property.seller_info.phone} />
      </div>

      {/* <!-- Submit --> */}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Property
        </button>
      </div>
    </form>
  );
};

export default UpdatePropertyForm;