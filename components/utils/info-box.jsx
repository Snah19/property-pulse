import Link from "next/link";

const InfoBox = ({title, isForRenter = false, children}) => {
  return (
    <div className={`flex flex-col justify-between p-6 rounded-lg shadow-md ${isForRenter ? "bg-gray-100": "bg-blue-100"}`}>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 mb-4">
          {children}
        </p>
      </div>
      <Link
        href={isForRenter ? "/properties" : "/properties/add"}
        className={`inline-block ${isForRenter ? "bg-black hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-lg px-4 py-2 `}
      >
        {isForRenter ? "Browse Properties" : "Add Property"}
      </Link>
    </div>
  );
};

export default InfoBox;