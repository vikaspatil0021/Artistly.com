"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

import { Menu, X } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover";

import { ModeToggle } from "./mode-toggle";




const components: { title: string, href: string }[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Artists",
        href: "/artists"
    },
    {
        title: "Onboard Artist",
        href: "/onboard-artist"
    },
    {
        title: "Dashboard",
        href: "/dashboard"
    }
]


function MenuList({
    className,
    set_is_menu_open
}: {
    className: string
    set_is_menu_open?: Dispatch<SetStateAction<boolean>>
}) {
    const router = useRouter();

    const closeMobileMenu = (href: string) => {

        if (set_is_menu_open) set_is_menu_open(false);
        router.push(href);
    }

    return (
        <>
            <NavigationMenuList className={className}>
                {
                    components.map(({ title, href }: { title: string, href: string }) => {
                        return (
                            <NavigationMenuItem key={href}>
                                <NavigationMenuLink asChild>

                                    <div
                                        className="px-3 w-full text-left cursor-default"
                                        onClick={() => closeMobileMenu(href)}
                                    >{title}</div>

                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })
                }
            </NavigationMenuList>
        </>
    )
}


function MobileMenu() {
    const [is_menu_open, set_is_menu_open] = useState(false);

    return (
        <Popover open={is_menu_open} onOpenChange={(val) => set_is_menu_open(val)}>
            <PopoverTrigger className="md:hidden">
                <div className="h-9 w-9 flex justify-center items-center bg-[#ffffff26]/30  rounded-md border border-[#ffffff26]">
                    {
                        is_menu_open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />
                    }
                </div>
            </PopoverTrigger>

            <PopoverContent className="mt-3 w-screen h-[calc(100vh-70px)] rounded-none">

                <MenuList
                    className="block"
                    set_is_menu_open={set_is_menu_open}
                />
            </PopoverContent>
        </Popover>
    )
}


export default function Header() {

    return (
        <>
            <NavigationMenu className="flex w-full items-center max-w-7xl justify-between border border-neutral-200 px-4 py-4 mx-auto dark:border-neutral-800">
                <Link href='/' className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                    <h1 className="text-base font-bold md:text-2xl">Artistly.com</h1>
                </Link>

                <div className="flex gap-3">
                    {/* desktop menu */}
                    <MenuList className="hidden md:flex" />

                    {/* dark mode toggle */}
                    <ModeToggle />

                    {/* mobile menu */}
                    <MobileMenu />

                </div>
            </NavigationMenu >
        </>
    );
};