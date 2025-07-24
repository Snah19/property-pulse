import Image from "next/image";
import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/get-session-user";
import profileDefault from "@/assets/images/profile.png";
import ProfilePropertyList from "@/components/pages/profile/profile-property-list";
import { convertToSerializableObject } from "@/utils/convert-to-object";

const ProfilePage = async () => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("User ID is requried");
  }

  const propertiesDocs = await Property.find({owner: userId}).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);

  return (
    <main className="flex-1 bg-blue-50">
      <div className="container m-auto py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mr-0 md:mr-20 mt-10 text-center md:text-left">
              <Image
                className="h-20 w-20 mb-4 mx-auto md:mx-0 rounded-full"
                src={sessionUser.user.image || profileDefault}
                alt="User"
                width={48}
                height={48}
              />

              <div className="mb-4">
                <h2 className="text-xl font-bold">Username: </h2>
                <span>{sessionUser.user.name}</span> 
              </div>
              <div>
                <h2 className="text-xl font-bold">Email: </h2>
                <span>{sessionUser.user.email}</span>
              </div>
            </div>

            <div className="md:w-3/4 mt-10 md:mt-0 md:pl-4">
              <h2 className="text-2xl font-bold mb-4">Your Listings</h2>
              <ProfilePropertyList properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;