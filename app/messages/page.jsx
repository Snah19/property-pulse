import MessageCard from "@/components/pages/messages/message-card";
import connectToMongoDB from "@/config/database";
import Message from "@/models/message";
import "@/models/property";
import { convertToSerializableObject } from "@/utils/convert-to-object";
import { getSessionUser } from "@/utils/get-session-user";

const MessagesPage = async () => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
  const readMessages = await Message.find({ recipient: userId, read: true }).sort({ createdAt: -1 }).populate("sender", "username").populate("property", "name").lean();
  const unreadMessages = await Message.find({ recipient: userId, read: false }).sort({ createdAt: -1 }).populate("sender", "username").populate("property", "name").lean();

  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializableObject(messageDoc);
    message.sender = convertToSerializableObject(messageDoc.sender);
    message.property = convertToSerializableObject(messageDoc.property);
    return message;
  });

  return (
    <main className="flex-1 bg-blue-50">
      <section className="container max-w-6xl mx-auto py-24">
        <div className="px-2 py-4 sm:px-6 sm:py-8 m-4 md:m-0 mb-4 shadow-md rounded-md border">
          <h1 className="mb-4 text-3xl font-bold">
            Your Messages
          </h1>
          {messages.length === 0 ? (
            <p>You have no messages</p>
          ) : (
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message._id}>
                <MessageCard message={message} />
              </li>
            ))}
          </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default MessagesPage;