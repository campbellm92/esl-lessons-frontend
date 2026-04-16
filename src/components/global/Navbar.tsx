import { NavLink } from "react-router-dom";

interface NavbarLink {
    text: string;
    url: string;
}

interface NavbarProps {
    links: NavbarLink[];
}

const navStyles =
    `flex justify-between items-center
    mb-10
    `
const logoStyles =
    `font-bold 
    underline decoration-4 decoration-electric-indigo
    `

const listStyles =
    `flex gap-8
    `

const linkBaseStyles =
    `relative
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-electric-indigo
    after:transition-all after:duration-300
    hover:after:w-full
    `

const linkActiveStyles =
    `font-bold text-electric-indigo
    `

const linkInactiveStyles =
    `text-inherit
    `

export const Navbar = ({ links }: NavbarProps) => {
    return (
        <nav className={navStyles}>
            <h3 className={logoStyles}>ESL Lessons</h3>
            <ul className={listStyles}>
                {links.map((link) => (
                    <li key={link.url}>
                        <NavLink
                            to={link.url}
                            className={({ isActive }) =>
                                `${linkBaseStyles} ${isActive ? linkActiveStyles : linkInactiveStyles
                                }`
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};