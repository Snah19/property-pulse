import PropertyCard from "@/components/pages/properties/property-card";
import connectToMongoDB from "@/config/database";
import User from "@/models/user";
import { getSessionUser } from "@/utils/get-session-user";

const BookmarksPage = async () => {
  const { userId } = await getSessionUser();
  const { bookmarks } = await User.findById(userId).populate("bookmarks");
  return (
    <main className="flex-1 py-6 px-4">
      <div className="container lg:container mx-auto py-6 px-4">
        <h1 className="mb-4 text-2xl font-bold">Bookmarks</h1>
        {bookmarks.length === 0 ? (
          <p>No Bookmarks</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmarks.map((property) => (
              <li key={property._id}>
                <PropertyCard property={property} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default BookmarksPage;