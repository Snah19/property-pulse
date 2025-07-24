import PropertyCard from "./properties/property-card";
import connectToMongoDB from "@/config/database";
import Property from "@/models/property";

const RecentPropertyGrid = async () => {
  await connectToMongoDB();
  const recentProperties = await Property.find({}).sort({createAt: -1}).limit(6).lean();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        recentProperties.map(property => (
          <li key={property._id}>
            <PropertyCard property={property} />
          </li>
        ))
      }
    </ul>   
  );
};

export default RecentPropertyGrid;