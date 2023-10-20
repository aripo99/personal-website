"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const TopNacvBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuTrigger>School</NavigationMenuTrigger>
                    <NavigationMenuTrigger>Books</NavigationMenuTrigger>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default TopNacvBar;