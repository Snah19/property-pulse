"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDelete , MdEdit } from "react-icons/md";
import deleteProperty from "@/app/actions/delete-property";
import { toast } from "react-toastify";

const ProfilePropertyList = ({properties: intialProperties}) => {
  const [properties, setProperties] = useState(intialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this property?");

    if (!isConfirmed) return;

    await deleteProperty(propertyId);
    setProperties(curr => curr.filter((property) => property._id !== propertyId));
    toast.success("Property Deleted Successfully");
  };

  return (
    <ul>
      {properties.map((property, index) => (
        <li className="mb-10" key={index}>
          <Link href={`/properties/${property._id}`}>
            <Image
              className="h-32 w-full rounded-md object-cover"
              src={property.images[0]}
              alt="Property 1"
              width={1280}
              height={720}
            />
          </Link>
          <div className="mt-2">
            <p className="text-lg font-semibold">{property.name}</p>
            <p className="text-gray-600">Address: {property.location.street} {property.location.city} {property.location.state}</p>
          </div>
          <div className="flex gap-x-4 mt-2">
            <Link
              href={`/properties/${property._id}/update`}
              
            >
              <MdEdit className="text-blue-500" />
            </Link>
            <button
              type="button"
              onClick={() => handleDeleteProperty(property._id)}
            >
              <MdDelete className="text-red-500" />
            </button>
          </div>
        </li>
      ))}

    </ul>
  );
};

export default ProfilePropertyList;