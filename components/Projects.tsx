import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function Projects() {
    const projectList = [
        {
            name: 'E-Commerce Platform',
            description: 'A modern e-commerce platform with intuitive UI and integrated payment gateway.',
            thumbnail: '/path_to_thumbnail_image1.jpg',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: 'https://github.com/yourusername/ecommerce-platform',
            demo: 'https://ecommerce-platform-demo.com'
        },
        {
            name: 'Social Media Dashboard',
            description: 'An analytics dashboard for tracking social media metrics and engagement.',
            thumbnail: '/path_to_thumbnail_image2.jpg',
            techStack: ['Vue.js', 'Firebase', 'Chart.js'],
            github: 'https://github.com/yourusername/social-media-dashboard',
            demo: 'https://social-media-dashboard-demo.com'
        }
    ];

    return (
        <section className="my-16">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectList.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={project.thumbnail} alt={project.name + " thumbnail"} className="w-full rounded" />
                            <div className="flex mt-4 space-x-2">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="bg-gray-800 text-gray-300 rounded p-1 text-xs">{tech}</span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex space-x-4">
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Projects;
