import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { pieces } from "@/components/Blog"


export default function Blog() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    pieces.map((blog, index) => (
                        <Link href={blog.link} key={index}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{blog.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{blog.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <span className="text-blue-500 hover:underline">Read more</span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}