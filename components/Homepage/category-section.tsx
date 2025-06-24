import { motion } from "motion/react"

import { categoryCards } from "@/data/categories"
import CategoryCard from "./category-card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function CategorySection() {
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className=" pt-0 p-4 pb-16 md:p-16 md:pt-0"
            >

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {categoryCards.map(({ category, src, title }, index) => (
                            <CarouselItem key={index} className={`basis-[60%] sm:basis-[45%] lg:basis-[35%] xl:basis-[30%]`}>
                                <CategoryCard
                                    src={src}
                                    title={title}
                                    category={category}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </motion.div>

        </>
    )
}