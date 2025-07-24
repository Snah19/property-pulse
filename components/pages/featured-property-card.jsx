import Link from "next/link";
import Image from "next/image";

import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import { getRateDisplay } from "@/utils/get-rate-display";

const FeaturedPropertyCard = ({ property }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row"
    >
      <Image
        src={property.images[0]}
        alt=""
        className="w-full h-auto rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-2/5"
        width={1280}
        height={720}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <div className="text-gray-600 mb-4">{property.type}</div>
        <h3
          className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
        >
          {getRateDisplay(property.rates)}
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="inline-flex items-center gap-x-2">
            <FaBed />
            <span className="md:hidden lg:inline">{property.beds} Beds</span>
          </p>
          <p className="inline-flex items-center gap-x-2">
            <FaBath />
            <span className="md:hidden lg:inline">{property.baths} Baths</span>
          </p>
          <p className="inline-flex items-center gap-x-2">
            <FaRulerCombined />
            <span className="md:hidden lg:inline">{property.square_feet} sqft</span>
          </p>
        </div>

        <div
          className="flex justify-center gap-4 text-green-900 text-sm mb-4"
        >
          {property.rates.nightly && (
            <p className="inline-flex items-center gap-x-2">
              <FaMoneyCheckDollar />
              <span>Nightly</span>
            </p>
          )}
          {property.rates.weekly && (
            <p className="inline-flex items-center gap-x-2">
              <FaMoneyCheckDollar /> 
              <span>Weekly</span>
            </p>
          )}
          {property.rates.monthly && (
            <p className="inline-flex items-center gap-x-2">
              <FaMoneyCheckDollar /> 
              <span>Monthly</span>
            </p>
          )}
        </div>

        <hr className="border border-gray-200 mb-5" />

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex items-center gap-x-2 mb-4 lg:mb-0">
            <FaLocationDot className="text-orange-700" />
            <span className="text-orange-700"> Boston MA </span>
          </div>
          <Link
            href={`properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyCard;