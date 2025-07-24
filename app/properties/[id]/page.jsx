import BackToProperties from "@/components/pages/properties/property-detail/back-to-properties";
import PropertyHeaderImage from "@/components/pages/properties/property-detail/property-header-image";
import PropertyDetail from "@/components/pages/properties/property-detail/property-detail";
import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import PropertyImages from "@/components/pages/properties/property-images";
import { convertToSerializableObject } from "@/utils/convert-to-object";

const PropertyDetailPage = async ({ params }) => {
  const { id } = await params;

  await connectToMongoDB();
  const propertyDocs = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDocs);

  if (!property) {
    return (
      <main>
        <h1 className="mt-10 text-2xl font-bold text-center">Property Not Found</h1>
      </main>
    );
  }
  return (
    <main className="flex-1">
      <PropertyHeaderImage image={property.images[0]} />
      <BackToProperties />
      <PropertyDetail property={property} />
      <PropertyImages images={property.images} />
    </main>
  );
};

export default PropertyDetailPage;