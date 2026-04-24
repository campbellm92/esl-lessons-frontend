import { LessonCard } from "../../components/global/LessonCard";
import useFetchLessons from "../../hooks/useFetchLessons";


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
    const { data, error, loading } = useFetchLessons()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className={sectionStyles}>
            <h2 className={titleStyles}>{title}</h2>
            <div className={cardsWrapperStyles}>
                {data.map((lesson) => (
                    <LessonCard
                        key={lesson.id}
                        id={lesson.id}
                        slug={lesson.slug}
                        imgSrc={`/assets/illustrations/processed/${lesson.image}.svg`}
                        title={lesson.title}
                        level={lesson.level}
                        tags={lesson.tags}
                        description={lesson.description}
                        onSelect={(id) => {
                            console.log("Go to lesson:", id);
                            // later -- navigate(`/lessons/${id}`)
                        }}
                    />
                ))}
            </div>
        </section>
    );
};