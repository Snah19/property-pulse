import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import FeaturedPropertyCard from "./featured-property-card";


const FeaturedProperties = async () => {
  await connectToMongoDB();

  const properties = await Property.find({
    is_featured: true,

  }).lean();

  return (
    <>
      {properties.length > 0 ? (
        <section className="bg-blue-50 pt-6 px-4 pb-10">
          <div className="container-xl lg:container mx-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
              Featured Properties
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <li key={property._id}>
                  <FeaturedPropertyCard property={property} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) :
      null}
    </>
  );
};

export default FeaturedProperties;