interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
    isLoading?: boolean;
}

const baseStyles =
    `bg-pumpkin-spice 
    text-zinc-100 font-extrabold 
    p-2 
    rounded-md 
    cursor-pointer`

export const Button: React.FC<ButtonProps> = ({
    children,
    isLoading = false,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`${baseStyles} ${className || ""}`}
        >{isLoading ? "..." : children}</button>
    )
}
