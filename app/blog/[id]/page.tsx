import Markdown from 'react-markdown'
import getBlog from "@/lib/actions/get-blog"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"


export default async function Blog({ params }: Params) {
    const blogId = params.id
    const resp = await getBlog(blogId)
    const markdown = resp.markdown
    return (
        <div className="px-4 py-6 md:px-6 lg:py-12">
            <Markdown className="markdown">{markdown}</Markdown>
        </div >
    )
}