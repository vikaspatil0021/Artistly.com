import Link from "next/link";
import Image from "next/image"
import { motion } from "motion/react";

import { CategoryCardOptions } from "@/data/categories";

import { Card, CardContent } from "@/components/ui/card"


export default function CategoryCard(
    {
        category,
        title,
        src
    }: CategoryCardOptions
) {

    return (
        <>
            <Card className="relative z-10 flex h-100 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] dark:bg-neutral-900">
                <CardContent>
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                    <div className="relative z-40 p-1">
                        <motion.p
                            className="text-left font-sans text-sm font-medium text-white md:text-base"
                        >
                            {category}
                        </motion.p>
                        <motion.p
                            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
                        >
                            {title}
                        </motion.p>
                    </div>
                    <div className="absolute inset-x-0 z-30 bottom-0 p-6 w-full">
                        <Link href='/artists' className="flex justify-center border border-black/30 rounded-lg bg-black shadow-2xl px-6 py-2 font-medium text-white text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Find {category}
                        </Link>
                    </div>
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="absolute inset-0 z-10 object-cover"
                    />
                </CardContent>
            </Card>
        </>
    )
}