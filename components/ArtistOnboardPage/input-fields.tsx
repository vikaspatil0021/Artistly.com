import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import { ArtistFormInputs } from "@/lib/types";


export function NameInputField({ register, errors }: {
    register: UseFormRegister<ArtistFormInputs>,
    errors: FieldErrors<ArtistFormInputs>
}) {
    return (
        <>
            <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-1">Name</Label>
                <Input
                    id="name"
                    placeholder="Enter artist's name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
            </div>
        </>
    )
}

export function BioTextAreaField({ register, errors }: {
    register: UseFormRegister<ArtistFormInputs>,
    errors: FieldErrors<ArtistFormInputs>
}) {
    return (
        <>
            <div>
                <Label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</Label>
                <Textarea
                    id="bio"
                    placeholder="Enter a short artist bio"
                    rows={4}
                    {...register('bio', {
                        required: 'Bio is required',
                        minLength: { value: 10, message: 'Bio must be at least 10 characters' },
                    })}
                />
                {errors.bio && (
                    <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>
                )}
            </div>
        </>
    )
}



export function LocationInputField({ register, errors }: {
    register: UseFormRegister<ArtistFormInputs>,
    errors: FieldErrors<ArtistFormInputs>
}) {
    return (
        <>
            <div>
                <Label htmlFor="location" className="block text-sm font-medium mb-1">Location</Label>
                <Input
                    id="location"
                    placeholder="Enter city name"
                    {...register("location", { required: "Location is required" })}
                />
                {errors.location && (
                    <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>
                )}
            </div>
        </>
    )
}