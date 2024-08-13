import Markdown from 'react-markdown'
import getBlog from "@/lib/actions/get-blog"
import { Card, CardContent } from "@/components/ui/card"

export default async function Blog({ params }: { params: { id: string } }) {
    const blogId = params.id
    const resp = await getBlog(blogId)
    const { markdown } = resp

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <Card>
                <CardContent className="pt-6">
                    <Markdown
                        className="prose prose-slate dark:prose-invert max-w-none"
                    >
                        {markdown}
                    </Markdown>
                </CardContent>
            </Card>
        </div>
    )
}