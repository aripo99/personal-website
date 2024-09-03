import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const pieces = [
    {
        title: "moving to california",
        description: "at age 18, i moved to california for college...",
        link: "blog/moving-to-california",
    },
    {
        title: "friends",
        description: "most of my life i had friends. growing up in uruguay...",
        link: "blog/friends",
    },
    {
        title: "happiness",
        description: "every once in a while i think about what makes me happy...",
        link: "blog/happiness",
    }
];

export default function Blog() {
    return (
        <section className="my-12" id="blog">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    pieces.map((blog, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{blog.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{blog.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <a href={blog.link} className="text-blue-500 hover:underline">Read more</a>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}
