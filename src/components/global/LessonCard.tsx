import { Button } from "./Button";
import { Badge } from "./Badge";

interface LessonCardProps {
    slug: string;
    imgSrc?: string;
    title: string;
    level?: string[];
    tags: string[];
    description: string;
    onSelect: (slug: string) => void
}

const cardBaseStyles =
    `flex flex-col gap-2 
    max-w-md w-full
    p-2
    border-solid border-2 border-pumpkin-spice rounded-md`

const cardImgStyles =
    `
    
    `
const cardLevelStyles =
    `
    font-bold
    text-pumpkin-spice

    `

export const LessonCard = ({ slug, imgSrc, title, level, description, tags, onSelect }: LessonCardProps) => {
    return <div className={`${cardBaseStyles}`} onClick={() => onSelect(slug)}>
        {imgSrc && (
            <img src={imgSrc} alt={title} className={cardImgStyles} />
        )}
        <h3>{title}</h3>
        <p className={cardLevelStyles}>
            {level?.join(", ")}
        </p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag} text={tag} />
            ))}
        </div>
        <p>{description}</p>
        <div className="flex justify-center"><Button className="w-1/2">Learn</Button></div>
    </div>
}