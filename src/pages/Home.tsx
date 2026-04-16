import { Navbar } from "../components/global/Navbar";
import { Hero } from "../sections/home/Hero";
import { Lessons } from "../sections/home/Lessons";
import HeroImage from "../assets/images/hero-image.svg"

const links = [
    { text: "Home", url: "/" },
    { text: "Lessons", url: "/lessons" },
    { text: "About", url: "/about" },
    { text: "Login", url: "/login" },
];

export const Home = () => {
    return (
        <>
            <Navbar links={links} />
            <Hero image={<img src={HeroImage} />}
                title="Free English lessons, directly in your browser"
                body={
                    <>Why dog in house? <strong>i'm the sole ruler of this </strong>i'm the sole ruler of this home and its inhabitants smelly, stupid dogs,
                        inferior furballs time for night-hunt, human freakout walk on keyboard i'm going to lap some water out of my
                        master's cup meow meowwww yet meow for food, then when human fills food dish, take a few bites of food
                        and continue meowing get scared by doggo also cucumerro that box? i can fit in that box. Meow where is it?
                        i saw that bird i need to bring it home to mommy squirrel!</>
                } />
            <Lessons title="What do you want to learn today?" />
        </>
    );
};