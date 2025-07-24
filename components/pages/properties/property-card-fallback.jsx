import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const PropertyCardFallback = () => {
  return (
  <article className="rounded-xl shadow-md relative">
    <div className="relative w-full pt-[56.25%] rounded-t-xl overflow-hidden animate-pulse bg-neutral-100 dark:bg-neutral-500" />

    <div className="p-4">

      <div className="text-center mb-6">
        <div className="mb-2 rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
          <span className="opacity-0">Sample Text</span>
        </div>

        <h3 className="text-lg font-bold rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
          <span className="opacity-0">Sample Text</span>
        </h3>
      </div>
      
      <h3
        className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-full text-blue-500 font-bold text-right md:text-center lg:text-right"
      >
        <span className="opacity-0">$####/****</span>
      </h3>

      <div className="flex justify-center gap-4 text-gray-500 text-sm leading-none mb-4">
        <div className="inline-flex items-center gap-x-0.5">
          <FaBed />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0"># bed</span>
          </p>
        </div>

        <div className="inline-flex items-center gap-x-0.5">
          <FaBath />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0"># bath</span>
          </p>
        </div>
        <div className="inline-flex items-center gap-x-0.5">
          <FaRulerCombined />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0">#### sqft</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 w-full text-sm mb-4">
        <div className="flex items-center gap-x-0.5">
          <FaMoneyCheckDollar />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0">Nightly</span>
          </p>
        </div>
        <div className="flex items-center gap-x-0.5">
          <FaMoneyCheckDollar />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0">Weekly</span>
          </p>
        </div>
        <div className="flex items-center gap-x-0.5">
          <FaMoneyCheckDollar />
          <p className="rounded-full animate-pulse bg-neutral-100 dark:bg-neutral-400">
            <span className="opacity-0">Monthly</span>
          </p>
        </div>
      </div>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="flex items-center gap-2 mb-4 lg:mb-0">
          <FaLocationDot className="text-orange-700" />
          <div className="rounded-full animate-pulse bg-orange-500 dark:bg-orange-700">
            <span className="opacity-0"> Los Angeles, CA </span>
          </div>
        </div>
        <div className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm cursor-pointer"
        >
          Details
        </div>
      </div>
    </div>
  </article>
  );
};

export default PropertyCardFallback;