import { Badge } from "@/components/ui/badge";


interface ValueProps {
    title: string;
}

export default function ValueComponent({ title }: ValueProps) {
    return (
        <Badge>
            {title}
        </Badge>
    );
}
