import PropertyGrid from "@/components/pages/properties/property-grid";
import PropertyGridFallback from "@/components/pages/properties/property-grid-fallback";
import Pagination from "@/components/pagination";
import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import { Suspense } from "react";

export const metadata = {
  title: "Properties",
};

const PropertiesPage = async ({ searchParams }) => {
  await connectToMongoDB();
  const {page = 1, limit = 8} = await searchParams;
  const total = await Property.countDocuments({});
  const skip = (page - 1) * limit;
  const properties = await Property.find({}).skip(skip).limit(limit);

  return (
    <main className="flex-1 py-6 px-4">
      <section className="container-xl lg:container mx-auto px-4 py-6">
          <Suspense fallback={<PropertyGridFallback />}>
            <PropertyGrid properties={properties} />
          </Suspense>
          <Pagination page={Number(page)} limit={Number(limit)} total={Number(total)} />
      </section>
    </main>
  );
};

export default PropertiesPage;