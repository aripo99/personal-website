'use client'

import { usePathname } from "next/navigation"

export default function Blog() {
    const pathname = usePathname()
    const blogId = pathname.split('/')[2]

    return (
        <div>
            <h1>Blog {blogId} </h1>
        </div>
    )
}