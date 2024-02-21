'use client'

import { usePathname } from "next/navigation"
import Markdown from 'react-markdown'
import getBlog from "@/lib/actions/get-blog"
import { useState, useEffect } from "react"

export default function Blog() {
    const [markdown, setMarkdown] = useState('')
    const pathname = usePathname()
    const blogId = pathname.split('/')[2]

    useEffect(() => {
        async function fetchBlog() {
            const response = await getBlog(blogId)
            setMarkdown(response.markdown)
        }
        fetchBlog()
    }, [blogId])

    return (
        <div>
            <h1>Blog {blogId} </h1>
            <Markdown>{markdown}</Markdown>
        </div>
    )
}