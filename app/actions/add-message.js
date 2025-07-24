"use server";

import connectToMongoDB from "@/config/database";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";

const addMessage = async (previousState, formData) => {
    await connectToMongoDB();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error("User ID is required");
    }

    const { userId } = sessionUser;

    const recipient = formData.get("recipient");

    if (userId === recipient) {
        return {
            error: "You cannot send a message to yourself"
        };
    }

    const newMessage = new Message({
        sender: userId,
        recipient,
        property: formData.get("property"),
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        body: formData.get("body")
    });

    await newMessage.save();

    return { submitted: true };
};

export default addMessage;