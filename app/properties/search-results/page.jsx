import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import { convertToSerializableObject } from "@/utils/convert-to-object";

import PropertyCard from "@/components/pages/properties/property-card";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import PropertySearchForm from "@/components/pages/property-search-form";
import Link from "next/link";

const SearchResultsPage = async ({ searchParams }) => {
  await connectToMongoDB();

  const {location, propertyType} = await searchParams;
  const locationPattern = new RegExp(location, "i");

  let query = {
    $or: [
      {name: locationPattern},
      {description: locationPattern},
      {"location.street": locationPattern},
      {"location.city": locationPattern},
      {"location.state": locationPattern},
      {"location.zipcode": locationPattern},
    ]
  }

  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  return (
    <main className="flex-1">
      <section className="py-4 bg-blue-700">
        <div className="flex flex-col items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container mx-auto px-4 py-6">
          <Link className="flex items-center gap-x-2 text-blue-500 hover:underline mb-3" href="/properties">
            <FaArrowAltCircleLeft />
            <span>
              Back to Properties
            </span>
          </Link>
          <h1 className="mb-4 text-2xl">Search Results</h1>
          {properties.length === 0 ? (
            <p>No search result</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-3  gap-6">
              {properties.map((property) => (
                <li key={property._id}>
                  <PropertyCard property={property} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default SearchResultsPage;