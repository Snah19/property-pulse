"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import markMessageAsRead from "@/app/actions/mark-message-as-read";
import deleteMessage from "@/app/actions/delete-message";
import { useGlobalContext } from "@/context/global-context";

const MessageCard = ({message}) => {
  const [isRead, setIsRead] = useState(message.read);

  const { setUnreadCount } = useGlobalContext();

  const handleMark = async () => {
    const read = await markMessageAsRead(message._id);
    setIsRead(read);
    setUnreadCount((curr) => (read ? curr - 1 : curr + 1));
    toast.success(`Marked As ${read ? "Read" : "New"}`);
  };

  const handleDelete = async () => {
    await deleteMessage(message._id);
    setUnreadCount((curr) => (isRead ? curr : curr - 1));
    toast.success("Message Deleted");
  };

  return (
    <article className="relative p-2 sm:p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <span className="absolute top-2 right-2 px-2 py-1 text-sm rounded-md bg-yellow-500 text-white">New</span>
      )}
      <h2 className="mb-4 text-xl font-bold">
        {message.property.name}
      </h2>
      <p className="text-gray-700">
        {message.body}
      </p>
      <ul className="mt-4 text-sm sm:text-base">
        <li className="flex gap-x-2">
          <strong>
            Email:
          </strong>
          <a className="text-blue-500" href={`mailto:${message.email}`}>
            {message.email}
          </a>
        </li>
        <li className="flex gap-x-2">
          <strong>
            Phone:
          </strong>
          <a className="text-blue-500" href={`tel:${message.email}`}>
            {message.phone}
          </a>
        </li>
        <li className="flex gap-x-2">
          <strong>
            Received:
          </strong>
          <span>
            {new Date(message.createdAt).toLocaleString()}
          </span>
        </li>
      </ul>
      <div className="flex justify-between gap-x-2 mt-4">
        <button className="py-1 px-3 bg-blue-500 text-white rounded-md" onClick={handleMark}>
          {isRead ? "Mark As New" : "Mark As Read"}
        </button>
        <button className="py-1 px-3 bg-red-500 text-white rounded-md" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default MessageCard;