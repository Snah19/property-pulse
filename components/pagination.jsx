import Link from "next/link";

const Pagination = ({page, limit, total}) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <section className={`${total <= limit ? "hidden" : "flex"}  justify-center items-center container mx-auto my-8`}>
      <Link className={`${page <= 1 ? "hidden" : "inline"} mr-2 py-1 px-2 border border-gray-300 rounded`} href={`/properties?page=${page - 1}`}>
        Previous
      </Link>
      <span className="mx-2">
        Page {page} of {totalPages}
      </span>
      <Link className={`${page >= totalPages ? "hidden" : "inline"} ml-2 py-1 px-2 border border-gray-300 rounded`} href={`/properties?page=${page + 1}`}>
        Next
      </Link>
    </section>
  );
};

export default Pagination;