import connectToMongoDB from "@/config/database";
import Property from "@/models/property";

export const GET = async () => {
    try {
        await connectToMongoDB();
        const properties = await Property.find({});

        return new Response(properties, {
            status: 200
        });
    }
    catch (e) {
        return new Response("Something went wrong!", {status: 500});
    }
};