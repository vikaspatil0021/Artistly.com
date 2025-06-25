import { Control, Controller, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';
import { Button } from '../ui/button';


import { ArtistFormInputs } from '@/lib/types';

const categoryOptions = ['Singer', 'Dancer', 'DJ', 'Speaker'];


export default function CategoryField({
    control,
    watch,
    setValue,
    errors
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<ArtistFormInputs, any, ArtistFormInputs>,
    watch: UseFormWatch<ArtistFormInputs>
    setValue: UseFormSetValue<ArtistFormInputs>
    errors: FieldErrors<ArtistFormInputs>
}) {

    const selected = watch('category') || [];


    const toggle = (item: string) => {
        const newList = selected.includes(item)
            ? selected.filter((v) => v !== item)
            : [...selected, item];
        setValue('category', newList, { shouldValidate: true });
    };

    return (
        <div>
            <Label className="block text-sm font-medium mb-1">Category</Label>
            <Controller
                name="category"
                control={control}
                rules={{
                    required: 'At least one category is required',
                    validate: (value) =>
                        value.length > 0 || 'Select at least one category',
                }}
                render={() => (
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                                {selected.length > 0 ? selected.join(', ') : 'Select categories'}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent align="start" className="w-72 p-4 space-y-3">
                            {categoryOptions.map((cat) => (
                                <div key={cat} className="flex items-center gap-2">
                                    <Checkbox
                                        id={cat}
                                        checked={selected.includes(cat)}
                                        onCheckedChange={() => toggle(cat)}
                                    />
                                    <Label htmlFor={cat}>{cat}</Label>
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>
                )}
            />
            {errors.category && (
                <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>)}
        </div>
    )
}