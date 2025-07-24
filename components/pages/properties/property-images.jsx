"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="pb-10 bg-blue-50">
        <article className="contaniner mx-auto px-6">
          {images.length && images.length === 1 ? (
            <Item original={images[0]} thumbnail={images[0]} width={1280} height={720}>
              {({ref, open}) => (
                <Image className="h-[400px] mx-auto rounded-xl object-cover cursor-pointer" src={images[0]} alt="" width={1280} height={720} priority={true} ref={ref} onClick={open} />
              )}
            </Item>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <li className={`${images.length === 3 && index === 2 ? "col-span-2" : null}`} key={index}>
                <Item original={image} thumbnail={image} width={1280} height={720}>
                  {({ref, open}) => (
                    <Image className="w-full h-[400px] rounded-xl object-cover cursor-pointer" src={image} alt="" width={1280} height={720} priority={true} ref={ref} onClick={open} />
                  )}
                </Item>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </Gallery>
  );
};

export default PropertyImages;