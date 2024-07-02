import React from "react";
import Image from "next/image";
import { SquareCode } from "lucide-react";
import { components } from "@/types/api-collection";
import { getFileUrl } from "@/hooks/useFileUrl";
import directus from "@/lib/directus/index";
import Container from "../atoms/Container";
import ImageOrPlaceholder from "@repo/ui/components/atomics/atoms/ImageOrPlaceholder";
import Title from "../atoms/Title";

// export const Vector = styled.div`
//   position: relative;
//   z-index: -10;
//   width: 90vw;
//   top: -20vw;
//   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

//   @keyframes pulse {
//     0%, 100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: .5;
//     }
//   }

//   @media (min-width: 468px) {
//     top: 1vw;
//   }

//   .js {
//     position: absolute;
//     right: 0vw;
//   }

//   .html {
//     position: absolute;
//     left: 0vw;
//   }
// `

// export const SkillsContent = styled.div`
//   width: 12rem;
//   height: 10rem;

//   border-radius: 25px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 1rem;
//   overflow: hidden;
//   transition: 0.5s;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   h4 {
//     z-index: 1;
//   }

//   img {
//     z-index: 1;
//   }

//   .border {
//     &::before{
//       content: '';
//       position: absolute;
//       width: 5rem;
//       height: 17rem;
//       left: 4.5rem;
//       top: -40%;
//       background: ${(props) => props.color};
//       animation: barra 6s linear 0s infinite normal none running;
//       border-radius: 10px;

//     @keyframes barra {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }
//   }
//     }

//     ::after {
//       content: '';
//       position: absolute;
//       inset: 5px;
//       background: ${props => props.theme.backgroundAlt};
//       border-radius: 20px;
//     }
//   }

// `

// export const SkillsContainer = styled.div`
//   display: grid;
//   gap: 2rem;

//   @media (min-width: 468px) {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (min-width: 994px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

// `

// content: '';
//       position: absolute;
//       inset: 5px;
//       background: ${props => props.theme.backgroundAlt};
//       border-radius: 20px;

// before{
//       content: '';
//       position: absolute;
//       width: 5rem;
//       height: 17rem;
//       left: 4.5rem;
//       top: -40%;
//       background: ${(props) => props.color};
//       animation: barra 6s linear 0s infinite normal none running;
//       border-radius: 10px;

//     @keyframes barra {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }

export default function Skills({ skills }: { skills: components["schemas"]["ItemsSkills"][] }) {
    return (
        <Container>
            <div className="relative -z-10 w-[90vw] -top-[20vw] animate-pulse duration-[2s] ease-[cubic-bezier(0.4, 0, 0.6, 1)] repeat-infinite sm:top-[1vw]">
                <div className="absolute right-0">
                    <Image width={100} height={100} src="/public/vectors/js.svg" alt="" />
                </div>
                <div className="absolute left-0">
                    <Image width={85} height={85} src="/public/vectors/html.svg" alt="" />
                </div>
            </div>
            <Title>
                <SquareCode /> Skills
            </Title>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill) => {
                    return (
                        <div className="w-48 h-40 rounded-[24px] relative flex flex-col justify-center items-center mb-4 overflow-hidden duration-500 gap-4" color={skill.color!} key={skill.id}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <ImageOrPlaceholder
                                className="z-[1]"
                                width={60}
                                height={60}
                                src={getFileUrl(directus, typeof skill?.icon === "string" ? skill?.icon : skill?.icon?.id!)}
                                alt={skill.label!}
                            />
                            <h4 className="z-[1]">{skill.label}</h4>
                            <>
                                <div className="bg-primary-foreground inset-1 rounded-[20px] absolute"></div>
                                <div className="absolute w-20 h-72 left-16 top-[-40%] animate-spin duration-6s -z-10" style={{
                                    backgroundColor: skill.color
                                }}></div>
                            </>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
