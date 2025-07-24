import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { getRateDisplay } from "@/utils/get-rate-display";

const PropertyCard = ({property}) => {
  return (
  <article className="rounded-xl shadow-md relative">
    <Link href={`/properties/${property._id}`}>
      <Image
        src={property.images[0]}
        alt=""
        className="w-full h-auto rounded-t-xl"
        width={1280}
        height={720}
      />
    </Link>
    <div className="p-4">
      <div className="text-center mb-6">
        <div className="mb-2 text-gray-600">{property.type}</div>
        <h3 className="text-lg font-bold">{property.name}</h3>
      </div>
      <h3
        className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-full text-blue-500 font-bold text-right md:text-center lg:text-right"
      >
        {getRateDisplay(property.rates)}
      </h3>

      <div className="flex justify-center gap-4 text-gray-500 text-sm leading-none mb-4">
        <p className="inline-flex items-center gap-x-0.5">
          <FaBed />
          <span>{property.beds} {property.beds === 1 ? "bed" : "beds"}</span>
        </p>

        <p className="inline-flex items-center gap-x-0.5">
          <FaBath />
          <span>{property.baths} {property.baths === 1 ? "bath" : "baths"}</span>
        </p>
        <p className="inline-flex items-center gap-x-0.5">
          <FaRulerCombined />
          <span>{property.square_feet} sqft</span>
        </p>
      </div>

      <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
        <p className={`${property.rates.nightly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
          <FaMoneyCheckDollar /> 
          <span>Nightly</span>
        </p>
        
        <p className={`${property.rates.weekly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
          <FaMoneyCheckDollar /> 
          <span>Weekly</span>
        </p>

        <p className={`${property.rates.monthly ? "inline-flex" : "hidden"} items-center gap-x-0.5`}>
          <FaMoneyCheckDollar /> 
          <span>Monthly</span>
        </p>
      </div>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="flex items-center gap-2 mb-4 lg:mb-0">
          <FaLocationDot className="text-orange-700" />
          <span className="text-orange-700"> {property.location.city}, {property.location.state} </span>
        </div>
        <Link
          href={`/properties/${property._id}`}
          className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Details
        </Link>
      </div>
    </div>
  </article>
  );
};

export default PropertyCard;