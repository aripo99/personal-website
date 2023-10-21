import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function Work() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Appfolio",
            projects: [
                "Project A: A brief description",
                "Project B: Another description",
            ],
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
            duration: "2020 - 2022"
        }
    ];

    return (
        <section className="my-16 self-start w-full">
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
                            {exp.projects.map((project, idx) => (
                                <div key={idx} className="mb-2 text-gray-400">{project}</div>
                            ))}
                        </CardContent>
                        <CardFooter className="text-gray-300">
                            {exp.duration}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Work;
