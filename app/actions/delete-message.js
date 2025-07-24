"use server";

import connectToMongoDB from "@/config/database";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const deleteMessage = async (messageId) => {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    }

    const { userId } = sessionUser;

    const message = await Message.findById(messageId);

    if (message.recipient.toString() !== userId) {
        throw new Error("Unauthorized");
    }

    await message.deleteOne();

    revalidatePath("/", "layout");
};

export default deleteMessage;