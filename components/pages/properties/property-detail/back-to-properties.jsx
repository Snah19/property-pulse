import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackToProperties = () => {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Back to Properties</span>
        </Link>
      </div>
    </section>
  );
};

export default BackToProperties;