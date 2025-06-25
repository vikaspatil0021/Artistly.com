'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import CategoryField from '@/components/ArtistOnboardPage/category-field';
import { FeeRangeDropdown } from '@/components/ArtistOnboardPage/feerange-dropdown';


import { ArtistFormInputs } from '@/lib/types';
import { BioTextAreaField, LocationInputField, NameInputField } from './input-fields';
import LanguagesSpokenField from './language-spoken-field';



export default function ArtistOnboardForm() {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ArtistFormInputs>({
        defaultValues: {
            category: [],
        },
    });




    const onSubmit = (data: ArtistFormInputs) => {
        console.log('Artist Submitted:', data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full p-5 mx-auto space-y-6">
                <NameInputField
                    register={register}
                    errors={errors}
                />

                <BioTextAreaField
                    register={register}
                    errors={errors}
                />

                <LocationInputField
                    register={register}
                    errors={errors}
                />

                <CategoryField
                    control={control}
                    watch={watch}
                    setValue={setValue}
                    errors={errors}
                />

                <FeeRangeDropdown
                    control={control}
                    errors={errors}
                />

                <LanguagesSpokenField
                    control={control}
                    watch={watch}
                    setValue={setValue}
                    errors={errors}
                />

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </>
    );
}
