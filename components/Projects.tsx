import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function Projects() {
    const projectList = [
        {
            name: 'Kognis',
            description: 'An AI-powered education platform that helps students learn more effectively.',
            techStack: ['Next.js', 'Flask', 'MongoDB', 'Pinecone'],
            demo: 'https://www.youtube.com/watch?v=CPscvvBMwh0',
            image: '/images/kognis.png',
        },
        {
            name: 'Aitr',
            description: 'A platform to learn React using AI, adapting exercises and content on the fly.',
            techStack: ['Next.js', 'Supabase', 'Tailwind'],
            github: 'https://github.com/aripo99/react-learning-ai-app',
            image: '/images/aitr.png',
        },
        {
            name: 'Meme Generator',
            description: 'A meme generator that uses the gpt vision API to generate memes from uploaded images.',
            techStack: ['Next.js', 'Tailwind', 'shadcn/ui'],
            demo: 'https://www.youtube.com/watch?v=BW8J4QgWGJg',
            github: 'https://github.com/aripo99/meme_generator',
            image: '/images/meme_generator.png',
        }
    ];

    return (
        <section className="my-16" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectList.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={project.image}
                                alt={project.name + " thumbnail"}
                                width={500}
                                height={300}
                                className="w-full rounded"
                                layout="responsive"
                                objectFit="cover"
                            />
                            <div className="flex flex-wrap mt-4">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="bg-gray-800 text-gray-300 rounded p-1 text-xs mb-2 mr-2">{tech}</span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between items-center w-full">
                                {project.demo ? (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-left">Live Demo</a>
                                ) : (
                                    <p className="text-left text-gray-500">Coming soon</p>
                                )}
                                <div>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end">
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Projects;
