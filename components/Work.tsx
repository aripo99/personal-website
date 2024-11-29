import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Work() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "HappyRobot",
      projectsHeader: "Projects",
      projects: [
        "Main Product: Building workflows with voice AI agents in the logistics space. Part of the core team developing the application, including the web interface, the workflows, integrations, and voice AI agents.",
      ],
      techStack: ["Python", "NextJS", "Go"],
      duration: "2024 - present",
    },
    {
      title: "Software Engineer",
      company: "Appfolio",
      projectsHeader: "Projects",
      projects: [
        'RealmX: A assistant-like chatbot for property managers. It offers responses to data questions, such as "Which tenants have not paid rent this month?", and product inquiries like "How do I charge tenants?". I contributed on the backend, frontend, and the ML services.',
        "Invoice Processing: A machine learning pipeline that automatically extracts data from invoices and receipts, processing approximately 13 million invoices each year. My responsibilities included monitoring, maintenance, refactoring, and implementing strategies to reduce cloud infrastructure costs significantly.",
        "Bank Feed: A bank reconciliation tool designed to automatically match transactions from bank statements to their counterparts in Appfolio. It currently handles approximately 20k transactions each month. I worked on the entire development lifecycle, from initial design, data labeling, model training, and evaluation to deployment, continuous monitoring, and maintenance.",
      ],
      techStack: ["Python", "Rails", "React", "Typescript", "SQL", "AWS"],
      duration: "2021 - 2024",
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
      duration: "2020 - 2022",
    },
  ];

  return (
    <section className="my-12 self-start w-full" id="work">
      <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Work</h2>
      <div className="flex flex-col">
        {" "}
        {/* This wrapper arranges the cards vertically */}
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="mb-10 bg-transparent border border-gray-400 p-4 rounded-md w-full"
          >
            {/* w-full ensures each card stretches to the full width of its container */}
            <CardHeader className="mb-4">
              <CardTitle className="text-xl font-semibold">
                {exp.title}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {exp.company}
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-4">
              <div className="text-xl text-gray-400 mb-4 font-semibold">
                {exp.projectsHeader}
              </div>
              <Accordion type="single" collapsible className="w-full">
                {exp.projects.map((project, idx) => (
                  <AccordionItem key={idx} value={`project-${idx}`}>
                    <AccordionTrigger>
                      {project.split(": ", 1)}
                    </AccordionTrigger>
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
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 rounded p-1 text-xs mr-2 mb-2"
                    >
                      {tech}
                    </span>
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
