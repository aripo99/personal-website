import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const blogs = [
    {
        title: "friends",
        description: "coming soon... coming soon... coming soon... coming soon...",
        link: "blogs/friends",
    },
    {
        title: "inmigrant",
        description: "coming soon... coming soon... coming soon... coming soon...",
        link: "blogs/inmigrant",
    },
];

export default function Blog() {
    return (
        <section className="my-12" id="blog">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs.map((blog, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{blog.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{blog.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <a href={blog.link} className="text-blue-500 hover:underline">read more</a>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}