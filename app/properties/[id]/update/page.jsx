import UpdatePropertyForm from "@/components/pages/properties/edit/update-property-form";
import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import { convertToSerializableObject } from "@/utils/convert-to-object";


const UpdatePropertyPage = async ({ params }) => {
  await connectToMongoDB();
  const {id} = await params;
  console.log(id);
  const propertyDocs = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDocs);

  if (!property) {
    return (
      <h1 className="text-center text-2xl fond-bold mt-20">Property Not Found</h1>
    );
  }

  return (
    <main className="flex-1 bg-blue-50">
      <section className="container max-w-2xl mx-auto py-24">
        <div className="bg-white py-8 px-6 mb-4 md:m-0 shadow-md rounded-md border">
          <UpdatePropertyForm property={property} />
        </div>
      </section>
    </main>
  );
};

export default UpdatePropertyPage;