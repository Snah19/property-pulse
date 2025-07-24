"use server";

import connectToMongoDB from "@/config/database";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";

const getUnreadMessageCount = async () => {
    await connectToMongoDB();

    const sessionUser = await getSessionUser();
    
    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    } 

    const { userId } = sessionUser;

    const count = await Message.countDocuments({
        recipient: userId,
        read: false
    });

    return { count };
};

export default getUnreadMessageCount;