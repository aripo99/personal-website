"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuButton
} from "@/components/ui/navigation-menu"

import Link from "next/link";

const TopNavBar = () => {
    return (
        <NavigationMenu className="md:block hidden">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="#">
                        <NavigationMenuButton>About me</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#work">
                        <NavigationMenuButton>Work</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#projects">
                        <NavigationMenuButton>Projects</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#values">
                        <NavigationMenuButton>Values</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#school">
                        <NavigationMenuButton>School</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#books">
                        <NavigationMenuButton>Books</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

export default TopNavBar;