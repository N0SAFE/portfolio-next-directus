import Link from "next/link";
// import projects from "../../data/projects";
import { components } from "@/types/api-collection";
import useFileUrl from "@/hooks/useFileUrl";
import directus from "@/lib/directus/index";
import ImageOrPlaceholder from "@repo/ui/components/atomics/atoms/ImageOrPlaceholder";
import { getItemId } from "@/hooks/useItemId";
import { Monitor } from "lucide-react";
import Container from "../atoms/Container";
import Image from "next/image";
import Title from "../atoms/Title";

type ProjectsProps = {
    projects: components["schemas"]["ItemsProjects"][];
};

function Projects({ projects }: ProjectsProps) {
    const getFileUrl = useFileUrl(directus);

    return (
        <Container id="projects">
            <Title>
                <Monitor /> Projects
                <Image width={100} height={100} src="/public/vectors/code.svg" alt="tag de desenvolvimento animado" />
            </Title>
            <div className="flex flex-col justify-center items-center gap-4 mb-16 mx-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 9).map((project) => {
                    return (
                        <Link href={`/projects/${project.id}`} key={project.id}>
                                <div className="flex flex-col rounded-xl relative items-center duration-300 transition-transform overflow-hidden border-solid border-2 border-slate-500 hover:border-blue-500 max-w-96 xl:max-w-[25rem]">
                                    <ImageOrPlaceholder
                                        className="w-full h-full rounded-md hover:opacity-50 object-cover"
                                        width={400}
                                        height={210}
                                        src={getFileUrl(getItemId(project.image))}
                                        alt={project.title}
                                    />
                                    <div className="absolute px-4 pb-9 bottom-0 h-full w-full flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black to-90% bg-[linear-gradient(rgb(0, 0, 0, 0) -60%, rgb(8, 2, 5, 15))] opacity-0 duration-300 ease-in-out hover:opacity-100 h-full">
                                        <h2 className="font-black text-3xl text-center">{project.title}</h2>
                                        <span className="font-bold text-lg mb-3">{project.type}</span>
                                        <div className="flex flex-row gap-2">
                                            {project?.used_skills?.map((used_skill) => {
                                                if (typeof used_skill === "number") return;
                                                if (typeof used_skill.skills_id === "number") return;
                                                return (
                                                    <ImageOrPlaceholder
                                                        className="object-contain hover:opacity-50"
                                                        width={32}
                                                        height={32}
                                                        key={used_skill.id}
                                                        src={getFileUrl(getItemId(used_skill.skills_id?.icon))}
                                                        alt={used_skill.skills_id?.label}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                        </Link>
                    );
                })}
            </div>

            {/* <AllProjects title={"Todos os projetos"} /> */}
        </Container>
    );
}

export default Projects;
