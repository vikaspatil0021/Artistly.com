import { Label } from '@/components/ui/label';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

import { ArtistFormInputs } from '@/lib/types';


const feeOptions = [
    { label: "₹10,000 – ₹20,000", value: [10000, 20000] },
    { label: "₹20,000 – ₹30,000", value: [20000, 30000] },
    { label: "₹30,000 – ₹40,000", value: [30000, 40000] },
    { label: "₹40,000 – ₹50,000", value: [40000, 50000] },
    { label: "₹50,000+", value: [50000, 100000] },
];

export function FeeRangeDropdown({ control, errors }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<ArtistFormInputs, any, ArtistFormInputs>,
    errors: FieldErrors<ArtistFormInputs>
}) {
    return (
        <div className="space-y-2">
            <Label htmlFor="feeRange">Fee Range</Label>
            <Controller
                name="feeRange"
                control={control}
                rules={{ required: "Fee range is required" }}
                render={({ field }) => (
                    <Select
                        onValueChange={(val) => field.onChange(JSON.parse(val))}
                        value={JSON.stringify(field.value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select fee range" />
                        </SelectTrigger>
                        <SelectContent>
                            {feeOptions.map((opt) => (
                                <SelectItem key={opt.label} value={JSON.stringify(opt.value)}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
            {errors.feeRange && (
                <p className="text-sm text-red-500">{errors.feeRange.message}</p>
            )}
        </div>
    );
}
