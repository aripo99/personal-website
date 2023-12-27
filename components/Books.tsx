import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


type BookProps = {
    title: string;
    author: string;
    cover: string;
    aspectRatio?: "portrait" | "square";
    width?: number;
    height?: number;
    className?: string;
};

const favoriteBooks = [
    {
        title: 'Designing Machine Learning Systems',
        author: 'Chip Huyen',
        cover: '/images/designing_ml_systems.jpg',
    },
    {
        title: 'Build',
        author: 'Tony Fadell',
        cover: '/images/build.jpg',
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andy Hunt',
        cover: '/images/pragmatic_programmer.jpg',
    },
    {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        cover: '/images/the_lean_startup.jpg',
    },
    // {
    //     title: 'Shoe Dog',
    //     author: 'Phil Knight',
    //     cover: '/images/shoe_dog.jpg',
    // },
    // {
    //     title: 'Man\'s Search for Meaning',
    //     author: 'Viktor E. Frankl',
    //     cover: '/images/meaning.jpg',
    // },
];

const Book = ({
    title,
    author,
    cover,
    aspectRatio = "portrait",
    width,
    height,
    className,
    ...props
}: BookProps) => {
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="overflow-hidden rounded-md">
                        <Image
                            src={cover}
                            alt={title}
                            width={width}
                            height={height}
                            className={cn(
                                "h-auto w-auto object-cover transition-all hover:scale-105",
                                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                            )}
                        />
                    </div>
                </ContextMenuTrigger>
            </ContextMenu>
            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{title}</h3>
                <p className="text-xs text-muted-foreground">{author}</p>
            </div>
        </div>
    )
}

const BooksCarousel: React.FC = () => {
    return (
        <section className="mb-8 relative">
            <ScrollArea>
                <div className="flex space-x-4 pb-4">
                    {favoriteBooks.map((book) => (
                        <Book
                            key={book.title}
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                            className="w-[250px] min-w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                        />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </section>
    );
};

const BooksSection: React.FC = () => (
    <section className="my-12" id="books">
        <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">Favorite Books</h2>
        <BooksCarousel />
    </section>
);


export default BooksSection;

