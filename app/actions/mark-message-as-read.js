"use server";

import connectToMongoDB from "@/config/database";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const markMessageAsRead = async (messageId) => {
    await connectToMongoDB();

    const sessionUser = await getSessionUser();
    
    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    } 

    const { userId } = sessionUser;

    const message = await Message.findById(messageId);

    if (!message) {
        throw new Error("Message not found");
    }

    // Verify ownership
    if (message.recipient.toString() !== userId) {
        throw new Error("Unauthorized");
    }

    message.read = !message.read;

    revalidatePath("/messages", "page");

    await message.save();

    return message.read;
};

export default markMessageAsRead;