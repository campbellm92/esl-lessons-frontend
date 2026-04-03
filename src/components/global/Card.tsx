/*
title: The title of the lesson
image: An accompanying image for the lesson
description: A description of the lesson
*/

interface CardProps {
    id: string;
    title: string;
    image?: HTMLImageElement;
    description: string;
    level?: string[];
    onSelect: (id: string) => void
}

const cardBaseStyles = "flex gap-2 bg-amber-300 hover:bg-amber-200 text-zinc-800 text-2xl font-extrabold p-2 cursor-pointer border-solid border-2 border-zinc-100"

export const Card = ({ id, title, image, description, level, onSelect }: CardProps) => {
    return <div className={`${cardBaseStyles}`} onClick={() => onSelect(id)}>
        <img src="" alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}