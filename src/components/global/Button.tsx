interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
    isLoading?: boolean;
}

const styles =
    `bg-electric-indigo text-zinc-100 
    text-2xl font-extrabold p-2 max-w-[50%]
    rounded-md cursor-pointer`

const Button: React.FC<ButtonProps> = ({
    children,
    isLoading = false,
    ...props
}) => {
    return (
        <button {...props} className={styles}>{isLoading ? "..." : children}</button>
    )
}

export default Button