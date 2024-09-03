"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const values = [
    {
        title: "Always go the extra step",
    },
    {
        title: "Do the right thing",
    },
    {
        title: "Act with urgency",
    },
    {
        title: "Continuously improve",
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
    },
    {
        title: "Appreciate the little things"
    },
    {
        title: "Ask questions"
    },
    {
        title: "Try really really hard, do not give up"
    }
]

export default function Values() {
    return (
        <section className="my-12" id="values">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Values</h2>
            <Carousel>
                <CarouselContent className="-ml-1">
                    {values.map((value, index) => (
                        <CarouselItem key={index} className="pl-1 flex justify-center items-center">
                            <p className="text-xl text-center">{value.title}</p>
                        </CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section >
    )
}