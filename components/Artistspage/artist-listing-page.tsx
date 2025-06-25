import { Artist, artists } from "@/data/artists"
import ArtistCard from "@/components/Artistspage/artist-card"

export default function ArtistListingPage() {
    return (
        <>
            <div className="flex gap-5 justify-end">
hi
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-10">

                {
                    artists.map((artist: Artist, idx: number) => {
                        return (
                            <ArtistCard key={idx}
                                {...artist}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}