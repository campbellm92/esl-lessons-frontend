import { Card } from "../../components/global/Card";
// import lessonsSectionBackground from "../../assets/backgrounds/blob-scatter-haikei.svg"
import testImage from "../../assets/images/esports.jpg"

interface LessonsProps {
    title: string;
}

const sectionStyles =
    `flex flex-col
    w-full
    p-6 md:p-8
    bg-[url()]
    `

const titleStyles =
    `mb-10
    `

const cardsWrapperStyles =
    `grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    `

export const Lessons = ({ title }: LessonsProps) => {
    return (
        <section className={sectionStyles}>
            <h2 className={titleStyles}>{title}</h2>
            <div className={cardsWrapperStyles}>
                <Card imgSrc={testImage} title="Are esports sports?" level={["B2, C1"]} tags={["Vocabulary", "Speaking"]} description="Find out about the history of English and why we perceive words and phrases the way we do."></Card>
                <Card imgSrc={testImage} title="Are esports sports?" level={["B2, C1"]} tags={["Vocabulary", "Speaking"]} description="Find out about the history of English and why we perceive words and phrases the way we do."></Card>
                <Card imgSrc={testImage} title="Are esports sports?" level={["B2, C1"]} tags={["Vocabulary", "Speaking"]} description="Find out about the history of English and why we perceive words and phrases the way we do."></Card>
            </div>
        </section>
    );
};