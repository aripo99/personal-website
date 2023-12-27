"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const values = [
    {
        title: "Always go the extra step",
    },
    {
        title: "Do the right thing",
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
    // {
    //     title: "Give a shit"
    // },
    // {
    //     title: "Appreciate the little things"
    // },
    // {
    //     title: "Ask questions"
    // },
]

export default function Values() {
    return (
        <section className="my-12" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Values</h2>
            <Carousel>
                <CarouselContent className="-ml-1">
                    {values.map((value, index) => (
                        <CarouselItem key={index} className="pl-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-2xl font-semibold">{value.title}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section >
    )
}