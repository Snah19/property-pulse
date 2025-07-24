import PropertyCardFallback from "./components/pages/properties/property-card-fallback";

const RecentPropertyGridFallback = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            Array(6).fill(null).map((_, index) => (
              <li key={index}>
                <PropertyCardFallback />
              </li>
            ))
          }
    </ul>
  );
};

export default RecentPropertyGridFallback;