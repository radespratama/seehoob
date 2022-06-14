import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  imgClass?: string;
  size: string;
}

export default function ImageReus({ src, alt, imgClass, size }: ImageProps) {
  return (
    <div className={`relative ${size}`}>
      <Image
        src={src}
        alt={alt}
        className={`${imgClass} z-[2]`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
}
