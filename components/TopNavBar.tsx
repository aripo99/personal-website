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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/">
                        <NavigationMenuButton>Home</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog">
                        <NavigationMenuButton>Blog</NavigationMenuButton>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

export default TopNavBar;