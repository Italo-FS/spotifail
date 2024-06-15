import { Avatar } from "@material-tailwind/react";
import Image from "next/image";


interface iMosaic {
    thumbnail: string,
    HW: number,
    alt?: string

}

const Mosaic = ({ thumbnail, HW, alt = "" }: iMosaic) => {
    return (
        <Image
            src={thumbnail}
            alt={alt}
            width={HW}
            height={HW}
            className="rounded-lg"
        />
    );
};

export default Mosaic;

// <Avatar
//     className="m-2 rounded-full object-scale-down shadow-xl shadow-blue-gray-900/50"
//     src={thumbnail}
//     alt={alt}
//     variant="s"
// />