import { Button } from "./Button";
import { Badge } from "./Badge";

interface CardProps {
    id: string;
    img?: HTMLImageElement;
    title: string;
    level?: string[];
    tags: string[];
    description: string;
    onSelect: (id: string) => void
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

export const Card = ({ id, img, title, level, description, tags, onSelect }: CardProps) => {
    return <div className={`${cardBaseStyles}`} onClick={() => onSelect(id)}>
        <img src={`${img}`} alt={`${title}`} className={cardImgStyles} />
        <h3>{title}</h3>
        <p className={cardLevelStyles}>{level}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag} text={tag} />
            ))}
        </div>
        <p>{description}</p>
        <div className="flex justify-center"><Button className="w-1/2">Learn</Button></div>
    </div>
}