import AddPropertyForm from "@/components/pages/properties/add/add-property-form";

const AddPropertyPage = () => {
  return (
    <main className="flex-1 bg-blue-50">
      <section className="container max-w-2xl mx-auto py-24">
        <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
          <AddPropertyForm />
        </article>
      </section>
    </main>
  );
};

export default AddPropertyPage;