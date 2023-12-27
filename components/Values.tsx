import Value from "@/components/Value";

const values = [
    {
        title: "Always go the extra step",
    },
    {
        title: "Doing the right thing",
    },
    {
        title: "Continuos improvement",
    },
    {
        title: "Seek the truth",
    },
    {
        title: "Be comfortable with being uncomfortable",
    },
    {
        title: "Think slow act fast"
    },
    {
        title: "Give a shit"
    }
]

export default function Values() {
    return (
        <section className="my-12" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Values</h2>
            <div className="flex flex-col space-y-4">
                {values.map((value, index) => (
                    <Value key={index} title={value.title} />
                )
                )}
            </div>
        </section>
    )
}