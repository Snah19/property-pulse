import Image from "next/image";

const PropertyHeaderImage = ({image}) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            className="object-cover w-full h-[400px]"
            width={1280}
            height={720}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;