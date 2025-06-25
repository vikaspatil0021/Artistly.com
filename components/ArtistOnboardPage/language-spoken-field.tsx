import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

import {
    Control,
    Controller,
    FieldErrors,
    UseFormSetValue,
    UseFormWatch,
} from 'react-hook-form';

import { ArtistFormInputs } from '@/lib/types';

const languageOptions = ['English', 'Hindi', 'Tamil', 'Telugu', 'Bengali'];

export default function LanguagesSpokenField({
    control,
    watch,
    setValue,
    errors,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<ArtistFormInputs, any, ArtistFormInputs>;
    watch: UseFormWatch<ArtistFormInputs>;
    setValue: UseFormSetValue<ArtistFormInputs>;
    errors: FieldErrors<ArtistFormInputs>;
}) {
    const selected = watch('languagesSpoken') || [];

    const toggle = (item: string) => {
        const newList = selected.includes(item)
            ? selected.filter((v) => v !== item)
            : [...selected, item];
        setValue('languagesSpoken', newList, { shouldValidate: true });
    };

    return (
        <div>
            <Label className="block text-sm font-medium mb-1">Languages Spoken</Label>
            <Controller
                name="languagesSpoken"
                control={control}
                rules={{
                    required: 'At least one language is required',
                    validate: (value) =>
                        value.length > 0 || 'Select at least one language',
                }}
                render={() => (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                                {selected.length > 0
                                    ? selected.join(', ')
                                    : 'Select languages'}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-72 p-4 space-y-3">
                            {languageOptions.map((lang) => (
                                <div key={lang} className="flex items-center gap-2">
                                    <Checkbox
                                        id={lang}
                                        checked={selected.includes(lang)}
                                        onCheckedChange={() => toggle(lang)}
                                    />
                                    <Label htmlFor={lang}>{lang}</Label>
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>
                )}
            />
            {errors.languagesSpoken && (
                <p className="text-sm text-red-500 mt-1">
                    {errors.languagesSpoken.message}
                </p>
            )}
        </div>
    );
}
