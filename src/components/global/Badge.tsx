interface BadgeProps {
    text: string;
}

const badgeBaseStyles =
    `bg-pumpkin-spice
    font-semibold text-xs text-white
    p-1
    rounded-md
    `

export const Badge = ({ text }: BadgeProps) => {
    return <span className={badgeBaseStyles}>{text}</span>;
};