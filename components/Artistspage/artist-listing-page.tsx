"use client"
import { motion } from "motion/react"

import { useEffect, useState } from "react"

import { Artist, artists } from "@/data/artists"

import { Slider } from "../ui/slider"
import BaseSelect from "./base-select"
import ArtistCard from "@/components/Artistspage/artist-card"

import { categoryOptions, locationOptions } from "@/data/select-options"


export default function ArtistListingPage() {
    const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);

    const [filters, setFilters] = useState({
        category: "all",
        location: "all",
        priceRange: [14000, 60000]
    });


    useEffect(() => {
        const { category, location, priceRange: [pr1, pr2] } = filters;

        const filteredData = artists?.filter((each: Artist) => {

            const categoryMatches = category !== "all" ? each.category.toLowerCase().includes(category.toLowerCase()) : true;
            const locationMatches = location !== "all" ? each.location.toLowerCase().includes(location.toLowerCase()) : true;

            const priceRangeMatches = (pr1 !== 14000 || pr2 !== 60000) ? (() => {

                const [minStr, maxStr] = each.price;
                return minStr >= pr1 && maxStr <= pr2;

            })() : true;

            return categoryMatches && locationMatches && priceRangeMatches;
        });

        setFilteredArtists(filteredData);

    }, [filters]);

    return (
        <>
            <div className="flex flex-col items-center sm:items-end gap-5 pb-5">
                {/* filters */}
                <div className="flex flex-col gap-3 max-w-72 w-full">
                    <span className="text-center">
                        Price: ₹{filters.priceRange[0]} – ₹{filters.priceRange[1]}
                    </span>
                    <Slider
                        value={filters.priceRange}
                        min={14000} max={60000} step={2000}
                        onValueChange={(val) => setFilters((prev) => ({ ...prev, priceRange: val }))}
                        className="w-72"
                    />
                </div>

                <div className="flex w-full justify-center sm:justify-end gap-2">

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