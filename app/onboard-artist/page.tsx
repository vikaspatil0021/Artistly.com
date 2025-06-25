import { Metadata } from "next";
import ArtistOnboardForm from "@/components/ArtistOnboardPage/artist-onboard-form";

export const metadata: Metadata = {
    title: "Artist onboard - Artistly.com",
};

export default function ArtistOnboardPage() {

    return (
        <>
            <h1 className="text-3xl font-bold mt-6 mx-auto">Register as an Artist</h1>

            <ArtistOnboardForm />
        </>
    );
}
