import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Project from "@/components/WorkProject";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Work() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Appfolio",
            projectsHeader: "Projects",
            projects: [
                "RealmX: A assistant-like chatbot for property managers to get quick answers to their data questions, \"What tenants have not paid rent this month\", product questions \"How do I charge tenants\", and more. I worked on the backend, frontend, and the ML services.",
                "Invoice Processing: Machine learning pipeline that automatically extracts data from invoices and receipts. processing ~13M invoices each year. ",
                "Bank Feed: Bank reconciliation tool that automatically matches transactions from a bank statement to transactions in Appfolio, matching ~20k transactions each month.",
            ],
            techStack: ["Rails", "React", "Python", "Rails", "Typescript", "AWS"],
            duration: "2021 - present"
        },
        {
            title: "Teaching Assistant",
            company: "UC Santa Barbara",
            projects: [
                "CS 130B: Data Structures and Algorithms II",
                "CS 130A: Data Structures and Algorithms I",
                "CS 9: Intermediate Python",
                "CS 5B: Data Science 2",
                "CS 64: Computer Organization and Logic Design",
            ],
            projectsHeader: "Classes",
            techStack: ["C++", "Python", "Pandas", "NumPy"],
            duration: "2020 - 2022"
        }
    ];

    return (
        <section className="my-16 self-start w-full" id="work">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Work</h2>
            <div className="flex flex-col"> {/* This wrapper arranges the cards vertically */}
                {experiences.map((exp, index) => (
                    <Card key={index} className="mb-10 bg-transparent border border-gray-400 p-4 rounded-md w-full">
                        {/* w-full ensures each card stretches to the full width of its container */}
                        <CardHeader className="mb-4">
                            <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                            <CardDescription className="text-gray-300">{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="mb-4">
                            <div className="text-xl text-gray-400 mb-4 font-semibold">{exp.projectsHeader}</div>
                            <Accordion type="single" collapsible className="w-full">
                                {exp.projects.map((project, idx) => (
                                    <AccordionItem key={idx} value={`project-${idx}`}>
                                        <AccordionTrigger>{project.split(": ", 1)}</AccordionTrigger>
                                        <AccordionContent>
                                            {project.split(": ", 2)[1]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        </CardContent>
                        <CardFooter className="text-gray-300">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap mb-2">
                                    {exp.techStack.map((tech, idx) => (
                                        <span key={idx} className="bg-gray-800 text-gray-300 rounded p-1 text-xs mr-2 mb-2">{tech}</span>
                                    ))}
                                </div>
                                <div>{exp.duration}</div>
                            </div>

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Work;
