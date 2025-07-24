import Link from "next/link";
import { Suspense } from "react";
import RecentPropertyGridFallback from "../../recent-property-grid-fallback";
import RecentPropertyGrid from "./recent-property-grid";

const RecentPropertiesSection = () => {

  return (
    <>
    <section className="py-6 px-4">
      <article className="container-xl lg:container mx-auto px-4 py-6">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-500">
          Recent Properties
        </h2>
        <Suspense fallback={<RecentPropertyGridFallback />}>
          <RecentPropertyGrid />
        </Suspense>
      </article>
    </section>
    <section className="max-w-lg my-6 mx-auto px-6">
      <Link className="block py-4 px-6 rounded-xl bg-black hover:bg-gray-700 text-white text-center" href="/properties">
        View All Properties
      </Link>
    </section>
    </>
  );
};

export default RecentPropertiesSection;