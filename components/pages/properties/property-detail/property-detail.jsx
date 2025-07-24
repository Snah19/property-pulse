import PropertyInfo from "./property-info";

import BookmarkButton from "@/components/pages/properties/property-detail/bookmark-button";
import ShareButtons from "@/components/pages/properties/property-detail/share-buttons";
import PropertyContactForm from "@/components/pages/properties/property-detail/property-contact-form";

const PropertyDetail = ({property}) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <PropertyInfo property={property}  />
          
          <aside className="space-y-4">
            <BookmarkButton property={property} />
            <ShareButtons property={property} />
            <PropertyContactForm property={property} />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;