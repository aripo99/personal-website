import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link';

interface ProjectImageProps {
    name: string;
    image: string;
    url: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ name, image, url }) => {
    return (
        <Link href={url} className="block overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
                src={image}
                alt={`${name} thumbnail`}
                width={500}
                height={300}
                className="w-full h-auto"
                layout="responsive"
                objectFit="cover"
            />
        </Link>
    );
};

const Projects = () => {
    const projectList = [
        {
            name: 'Challenge Betz',
            description: 'A page to bet on challenges with friends, like who goes to the gym more each month.',
            techStack: ['Next.js', 'supabase', 'Tailwind', 'shadcn/ui'],
            image: '/images/challenge.png',
            url: 'https://challenge-betz.vercel.app/'
        },
        {
            name: 'Kognis',
            description: 'An AI-powered education platform that helps students learn more effectively.',
            techStack: ['Next.js', 'Flask', 'MongoDB', 'Pinecone'],
            demo: 'https://www.youtube.com/watch?v=CPscvvBMwh0',
            image: '/images/kognis.png',
            url: 'https://kognis.ai',
        },
        {
            name: 'Yatdl',
            description: 'Yet Another To Do List, but minimal and gamified. Destroy todos :p',
            techStack: ['Next.js', 'supabase', 'Tailwind', 'shadcn/ui'],
            github: 'https://github.com/aripo99/yatdl',
            image: '/images/yatdl.png',
            url: 'https://yatdl-aripo99.vercel.app'
        },
        {
            name: 'Personal Website',
            description: 'What you are looking at right now!',
            techStack: ['Next.js', 'Tailwind', 'shadcn/ui'],
            github: 'https://github.com/aripo99/personal-website',
            image: '/images/personal_website.png',
            url: 'https://aripolakof.com'
        },
        {
            name: 'Meme Generator',
            description: 'Generate memes from uploaded images.',
            techStack: ['Next.js', 'Tailwind', 'shadcn/ui'],
            demo: 'https://www.youtube.com/watch?v=BW8J4QgWGJg',
            github: 'https://github.com/aripo99/meme_generator',
            image: '/images/meme_generator.png',
            url: 'https://aimemelab.com'
        },
        {
            name: 'Ink Vision',
            description: 'A web app that generates tattoo designs.',
            techStack: ['Next.js', 'Tailwind', 'shadcn/ui'],
            github: 'https://github.com/aripo99/ink-vision',
            image: '/images/tattoo_generator.png',
            url: 'https://www.inkvision.art/'
        }
    ];

    return (
        <section className="my-12" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectList.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Link href={project.url}>
                                <CardTitle>{project.name}</CardTitle>
                            </Link>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProjectImage
                                name={project.name}
                                image={project.image}
                                url={project.url}
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
                                    <div></div>
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
