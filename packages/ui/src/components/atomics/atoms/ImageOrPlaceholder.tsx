import Image, { ImageProps } from "next/image";
import React from "react";

const ImageOrPlaceholder: React.FC<Omit<ImageProps, "src" | "alt"> & { src?: ImageProps["src"] | null; alt?: ImageProps["alt"] | null }> = ({ src, alt, ...props }) => {
    if (src) {
        return <Image src={src} alt={alt || "image"} {...props} />;
    }
    return <img src={require("../../../assets/images/placeholder.svg")} alt={"Placeholder Image"} {...props} />;
};

export default ImageOrPlaceholder;
