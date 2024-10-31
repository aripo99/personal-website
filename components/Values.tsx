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
        title: "Try really really hard, do not give up"
    },
    {
        title: "Act with urgency",
    },
    {
        title: "Continuously improve",
    },
    {
        title: "Do the right thing",
    },
    {
        title: "Give a shit"
    },
    {
        title: "Seek the truth",
    },
    {
        title: "Think slow act fast"
    },
    {
        title: "Appreciate the little things"
    }
]

export default function Values() {
    return (
        <section className="my-12 mx-8" id="values">
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