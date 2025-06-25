"use client"
import { motion } from "motion/react"

import { useEffect, useState } from "react"

import { Artist, artists } from "@/data/artists"

import ArtistCard from "@/components/Artistspage/artist-card"
import BaseSelect from "./base-select"

import { categoryOptions, locationOptions } from "@/data/select-options"


export default function ArtistListingPage() {
    const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);

    const [filters, setFilters] = useState({
        category: "all",
        location: "all",
    });


    useEffect(() => {
        const { category, location } = filters;

        const filteredData = artists?.filter((each: Artist) => {

            const categoryMatches = category !== "all" ? each.category.toLowerCase().includes(category.toLowerCase()) : true;
            const locationMatches = location !== "all" ? each.location.toLowerCase().includes(location.toLowerCase()) : true;
            return categoryMatches && locationMatches;
        });

        setFilteredArtists(filteredData);

    }, [filters])



    return (
        <>
            <div className="flex gap-2 justify-end items-center py-5">
                <span className="opacity-80">Filter:</span>

                <BaseSelect
                    placeholder="Category"
                    options={categoryOptions}
                    setFilters={setFilters}
                />
                <BaseSelect
                    placeholder="Location"
                    options={locationOptions}
                    setFilters={setFilters}
                />
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-10"
            >
                {/* case where results includes all objects without filters or more than 0 matches with filters*/}
                {
                    filteredArtists.length > 0 && filteredArtists.map((artist: Artist, idx: number) => {
                        return (
                            <ArtistCard key={idx}
                                {...artist}
                            />
                        )
                    })
                }

            </motion.div>
            {/* case where filters results with 0 matches */}
            {
                filteredArtists.length == 0 && (filters.category !== 'all' || filters.location !== 'all') &&
                <div className="h-100 w-full flex justify-center items-center">
                    <span className="opacity-70">No results found </span>
                </div>

            }
        </>
    )
}