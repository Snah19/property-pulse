"use client";

import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = ({error}) => {
  return (
    <section className="bg-blue-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <div className="flex justify-center">
            <FaExclamationCircle className="fas fa-exclamation-triangle fa-5x text-8xl text-red-400" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Something Went Wrong</h1>
            <p className="text-gray-500 text-xl mb-10">
              {error.toString()}
            </p>
            <Link
              href="/"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
              >Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;