import Markdown from 'react-markdown'
import getBlog from "@/lib/actions/get-blog"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"


export default async function Blog({ params }: Params) {
    const blogId = params.id
    const resp = await getBlog(blogId)
    const markdown = resp.markdown
    console.log("here")
    console.log(markdown.toString())
    console.log(typeof markdown)

    return (
        <div>
            <h1>Blog {blogId} </h1>
            <Markdown>{markdown}</Markdown>
        </div>
    )
}