"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { CarouselProps } from "@/types/interfaces";

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0] ?? "");

  return (
    <div className="space-y-2">
      <Image
        src={currentImage}
        width={720}
        height={720}
        alt="project image"
        className="w-full max-h-120 shadow"
      />
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} className="w-full max-h-28 overflow-hidden">
            <Image
              src={image}
              width={240}
              height={240}
              alt={`project image ${index + 1}`}
              className="opacity-60 hover:opacity-100 hover:scale-105 cursor-pointer transition"
              onClick={() => setCurrentImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
