"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Link from "next/link";

const TopNacvBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="#">
                        <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                    </Link>
                    <Link href="#work">
                        <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                    </Link>
                    <Link href="#projects">
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    </Link>
                    <Link href="#school">
                        <NavigationMenuTrigger>School</NavigationMenuTrigger>
                    </Link>
                    <Link href="#books">
                        <NavigationMenuTrigger>Books</NavigationMenuTrigger>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default TopNacvBar;