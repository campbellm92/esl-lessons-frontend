import { Button } from "../../components/global/Button";

interface HeroProps {
    image: React.ReactNode;
    title: string;
    body: React.ReactNode;
}

const sectionStyles =
    `flex flex-col md:flex-row justify-evenly gap-8
    w-full
    p-6 md:p-8 mb-10
    bg-mine-shaft-200`

const imgDivStyles =
    `w-full md:max-w-[35%]
    mb-6 md:mb-0`

const titleStyles =
    `mb-4`

export const Hero = ({ image, title, body }: HeroProps) => {
    return (
        <section className={sectionStyles}>
            <div className={imgDivStyles}>
                {image}
            </div>
            <div>
                <h2 className={titleStyles}>{title}</h2>
                <p>{body}</p>
                <div className="flex justify-center gap-4 mt-10">
                    <Button className="bg-electric-indigo">Sign up</Button>
                    <Button className="bg-electric-indigo">Explore the lessons</Button>
                </div>

            </div>

        </section>
    );
};