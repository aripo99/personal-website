"use client";

import React, { useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type BookProps = {
    title: string;
    author: string;
    cover?: string; // URL to the cover image
    link?: string;  // Optional link related to the book
};

const favoriteBooks = [
    {
        title: 'Brief History of Time',
        author: 'Stephen Hawking',
        // cover: '/path/to/image1.jpg',
        // link: 'https://example.com/brief-history'
    },
    {
        title: 'The Elegant Universe',
        author: 'Brian Greene',
        // cover: '/path/to/image2.jpg',
        // link: 'https://example.com/elegant-universe'
    },
    {
        title: 'Introduction to Computation',
        author: 'Michael Sipser',
        // cover: '/path/to/image4.jpg',
        // link: 'https://example.com/theory-computation'
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        cover: '/path/to/image5.jpg',
        // link: 'https://example.com/pragmatic-programmer'
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        // cover: '/path/to/image5.jpg',
        // link: 'https://example.com/pragmatic-programmer'
    }
];


const BookCard: React.FC<BookProps> = ({ title, author, cover, link }) => (
    <Card className="mr-4 mb-4 w-56">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{author}</CardDescription>
        </CardHeader>
        {/* <CardContent>
            <img src={cover} alt={title} className="w-full h-64 object-cover" />
        </CardContent> */}
        {/* {link && (
            <CardFooter>
                <a href={link} className="text-blue-500 hover:underline">Learn More</a>
            </CardFooter>
        )} */}
    </Card>
);

const scrollByAmount = (container: HTMLElement | null, amount: number, setStartIndex: React.Dispatch<React.SetStateAction<number>>) => {
    if (container) {
        const newIndex = amount > 0 ? 1 : -1; // increase or decrease index based on direction
        setStartIndex(prev => Math.max(0, prev + newIndex)); // make sure not to go below 0
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
};

const BooksCarousel: React.FC = () => {
    const scrollRef = useRef(null);
    const [startIndex, setStartIndex] = useState<number>(0); // initial start index
    const visibleBooksCount = 4;

    return (
        <section className="mb-8 relative">
            {startIndex > 0 && (
                <button
                    onClick={() => scrollByAmount(scrollRef.current, -250, setStartIndex)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                >
                    &lt;
                </button>
            )}

            <div className="flex overflow-x-auto" ref={scrollRef}>
                {favoriteBooks.slice(startIndex, startIndex + visibleBooksCount).map((book, index) => (
                    <BookCard key={index} {...book} />
                ))}
            </div>

            {(startIndex + visibleBooksCount) < favoriteBooks.length && (
                <button
                    onClick={() => scrollByAmount(scrollRef.current, 250, setStartIndex)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                >
                    &gt;
                </button>
            )}
        </section>
    );
};

const BooksSection: React.FC = () => (
    <section className="mt-12 mb-12" id="books">
        <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Favorite Books</h2>
        <BooksCarousel />
    </section>
);


export default BooksSection;

