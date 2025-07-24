import connectToMongoDB from "@/config/database";
import Property from "@/models/property";

export const GET = async (request, { params }) => {
    try {
        const { id }= await params;
        await connectToMongoDB();
        const property = await Property.findById(id);

        if (!property) return new Response("Property not found", { status: 404 });

        return new Response(property, {
            status: 200
        });
    }
    catch (e) {
        return new Response("Something went wrong!", {status: 500});
    }
};
