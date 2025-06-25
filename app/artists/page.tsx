
import { Metadata } from "next";
import ArtistListingPage from "@/components/Artistspage/artist-listing-page"

export const metadata: Metadata = {
    title: "Artists - Artistly.com",
};

export default function ArtistsPage() {
    return (
        <>
            <div className="p-5 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Browse Artists</h1>

                <ArtistListingPage />
            </div>
        </>
    )
}