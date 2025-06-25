import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


import { CategoryOptions, LocationOptions } from "@/data/select-options";
import { Dispatch, SetStateAction } from "react";



export default function BaseSelect({
    placeholder,
    options,
    setFilters
}: {
    placeholder: string,
    options: LocationOptions | CategoryOptions,
    setFilters: Dispatch<SetStateAction<{ category: string; location: string; priceRange: number[]; }>>
}) {

    const updateFilters = (val: string) => setFilters((prev) => (placeholder == 'Location' ? { ...prev, location: val } : { ...prev, category: val }));

    return (
        <Select onValueChange={(val) => updateFilters(val)} defaultValue="all">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All {placeholder}</SelectItem>
                {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}