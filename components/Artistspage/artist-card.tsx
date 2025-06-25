import Image from "next/image";

import { Artist } from "@/data/artists";


export default function ArtistCard({
    category, image, location, name, price
}: Artist) {
    return (
        <div className="rounded-xl bg-muted-foreground/20 dark:bg-[#ffffff26]/90  overflow-hidden border border-accent-foreground/5 dark:border-[#ffffff26]/60 shadow-md hover:shadow-lg w-full">
            <div className="relative aspect-video">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 100px"
                />
                <span className="absolute top-2 left-2 bg-white/90 text-black text-xs font-medium px-3 py-1 rounded-full">
                    {category}
                </span>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="text-sm dark:text-white/60 flex justify-between">
                    <span> {location}</span>
                    <span>  ₹{price[0]} – ₹{price[1]}</span>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Ask for Quote
                </button>
            </div>
        </div>

    )
}