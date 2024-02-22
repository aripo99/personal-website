const blogs = [
    {
        title: "On Moving to the US",
        description: "Coming soon...",
        link: "#",
    },
    {
        title: "On Moving to the US",
        description: "Coming soon...",
        link: "#",
    },
];

export default function Blog() {
    return (
        <section className="my-12" id="blog">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs.map((blog, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-xl font-bold mb-2">
                                <a href={blog.link}>{blog.title}</a>
                            </h3>
                            <p>{blog.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
