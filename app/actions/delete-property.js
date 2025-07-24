"use server";
import cloudinary from "@/config/cloudinary";

import connectToMongoDB from "@/config/database";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const deleteProperty = async (propertyId) => {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    }

    const { userId } = sessionUser;
    const property = await Property.findById(propertyId);

    if (!property) {
        throw new Error("Property Not Found");
    }

    // verify ownership

    if (property.owner.toString() !== userId) {
        throw new Error("Unauthorized");
    }

    // Extract public id from image URLs
    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split("/");
        return parts.at(-1).split(".").at(0);
    });

    // Delete images from Cloudinary
    if (publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy(`PropertyPulse/${publicId}`);
        }
    }

    await property.deleteOne();

    revalidatePath("/", "layout");
};

export default deleteProperty;