"use client";

import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import bookmarkProperty from "@/app/actions/bookmark-property";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import checkBookmarkStatus from "@/app/actions/check-bookmark-status";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
    });

  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to bookmark a listing");
      return;
    }

    bookmarkProperty(property._id).then(res => {
      if (res.error) {
        return toast.error(res.error);
      }

      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
    
  };

  return (
    <button
      className={`${isBookmarked ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"} text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center gap-x-2`}
      onClick={handleClick}
    >
      <FaBookmark  />
      <span>{isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}</span>
    </button>
  )
};

export default BookmarkButton;