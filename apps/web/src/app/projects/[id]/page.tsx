import Head from "next/head";
import Link from "next/link";

// import * as S from "../../styles/project";
// import { ButtonAlt, ButtonSecondary, Description } from "../../styles/styles";

import { Github, Globe, ArrowLeft, MessageSquare, Image as ImageIcon, Youtube, Hash } from "lucide-react";
import useFileUrl from "@/hooks/useFileUrl";
import { getItemId } from "@/hooks/useItemId";
import directus from "@/lib/directus";
import ImageOrPlaceholder from "@repo/ui/components/atomics/atoms/ImageOrPlaceholder";
import { readItem } from "@directus/sdk";
import Title from "@/components/atomics/atoms/Title";
import Button from "@/components/atomics/atoms/Button";
import ReactPlayer from "@/components/atomics/atoms/ReactPlayer";

function hexToRgb(hex?: string) {
    if (!hex) return null;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null;
}

interface ProjectProps {
    params: {
        id: string;
    };
}

const S = new Proxy({} as any, {
    get: () => {
        return <div></div>;
    }
});

// const Banner = styled.div`
//   position: relative;
//   margin-bottom: 6rem;

//   .bannerUrl {
//     width: 100%;
//     height: 20rem;
//     object-fit: cover;
//     object-position: 0 30%;
//     border-bottom: 1px solid ${props => props.theme.border};

//     @media (min-width: 768px) {
//       height: 27rem;
//     }

//     @media (min-width: 994px) {
//       height: 28rem;
//     }
//   }

//   .bannerContainer {
//     @media (min-width: 1300px) {
//       display: flex;
//       justify-content: space-between;
//     }
//   }

//   .bannerContent {
//     position: relative;
//     bottom: 5rem;
//     z-index: 2;
//     margin-bottom: 2rem;

//     @media (min-width: 994px) {
//       bottom: 7.5rem;
//       margin-bottom: 3rem;
//     }

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 1rem;

//     @media (min-width: 768px) {
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       align-items: flex-end;
//       padding-left: 3rem;
//     }

//     @media (min-width: 994px) {
//       padding-left: 7rem;
//     }

//     @media (min-width: 1500px) {
//       padding-left: 15%;
//     }

//     h1 {
//       color: ${props => props.theme.text};
//       font-weight: 800;
//       font-size: 2rem;

//       @media (min-width: 768px) {
//         font-size: 2.7rem;
//       }
//     }

//     p {
//       font-size: 1.1rem;
//       margin-bottom: 2rem;

//       @media (min-width: 768px) {
//         font-size: 1.3rem;
//       }

//       font-weight: 600;
//       color: ${props => props.theme.firstColor};
//     }

//     img {
//       width: 10rem;
//       height: 10rem;
//       border-radius: 10px;
//       padding: 1rem;
//       background: ${props => props.theme.backgroundAlt};
//       border: 1px solid ${props => props.theme.borderSecond};
//       mix-blend-mode: multiply;

//       @media (min-width: 768px) {
//         width: 13rem;
//         height: 13rem;
//       }

//       @media (min-width: 994px) {
//         width: 16rem;
//         height: 16rem;
//       }
//     }
//   }

//   .link {
//     position: relative;
//     bottom: 5rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;

//     @media (min-width: 468px) {
//       flex-direction: row;
//       align-items: end;
//       justify-content: center;
//     }

//     @media (min-width: 768px) {
//       margin-bottom: 1rem;
//     }

//     @media (min-width: 1300px) {
//       bottom: 8.8rem;
//       right: 3%;
//     }

//     @media (min-width: 2000px) {
//       right: 14%;
//     }
//   }
// `

export default async function ProjectPage({ params }: ProjectProps) {
    const project = await directus.request(
        readItem("projects", params.id, {
            fields: [
                "*",
                {
                    // @ts-ignore
                    used_skills: [
                        "*",
                        {
                            skills_id: ["*"]
                        }
                    ],
                    screenshots: ["*"]
                }
            ]
        })
    );

    console.log(project);const getFileUrl = useFileUrl(directus);
    console.log(getFileUrl(getItemId(project.preview)))

    
    const imageUrl = getFileUrl(getItemId(project.image));

    return (
        <>
            <Head>
                <title>{project.title} | SEBILLE Mathis </title>
                <meta name="description" content={project.description!} />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={project.description!} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:secure_url" content={imageUrl} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:src" content={imageUrl} />
            </Head>

            {/* width: 100%;
//     height: 20rem;
//     object-fit: cover;
//     object-position: 0 30%;
//     border-bottom: 1px solid ${props => props.theme.border};

//     @media (min-width: 768px) {
//       height: 27rem;
//     }

//     @media (min-width: 994px) {
//       height: 28rem;
//     } */}

            {/* //     h1 {
//       color: ${props => props.theme.text};
//       font-weight: 800;
//       font-size: 2rem;

//       @media (min-width: 768px) {
//         font-size: 2.7rem;
//       }
//     }

//     p {
//       font-size: 1.1rem;
//       margin-bottom: 2rem;

//       @media (min-width: 768px) {
//         font-size: 1.3rem;
//       }

//       font-weight: 600;
//       color: ${props => props.theme.firstColor};
//     } */}

            {/* position: relative;
//     bottom: 5rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;

//     @media (min-width: 468px) {
//       flex-direction: row;
//       align-items: end;
//       justify-content: center;
//     }

//     @media (min-width: 768px) {
//       margin-bottom: 1rem;
//     }

//     @media (min-width: 1300px) {
//       bottom: 8.8rem;
//       right: 3%;
//     }

//     @media (min-width: 2000px) {
//       right: 14%;
//     } */}
            {/* 
img {
//       width: 10rem;
//       height: 10rem;
//       border-radius: 10px;
//       padding: 1rem;
//       background: ${props => props.theme.backgroundAlt};
//       border: 1px solid ${props => props.theme.borderSecond};
//       mix-blend-mode: multiply;

//       @media (min-width: 768px) {
//         width: 13rem;
//         height: 13rem;
//       }

//       @media (min-width: 994px) {
//         width: 16rem;
//         height: 16rem;
//       }
//     } */}

            <div className="flex flex-col">
                <div className="relative mb-24">
                    <ImageOrPlaceholder
                        className="w-full h-[20rem] object-cover object-position-[0_30%] border-b-[1px] border-b-black md:h-[27rem] lg:h-[28rem]"
                        src={imageUrl}
                        alt={project.title}
                        width={1920}
                        height={1080}
                    />
                    <div className="2xl:flex 2xl:justify-between">
                        <div className="flex justify-center flex-col gap-4 relative bottom-20 z-[2] mb-8 md:flex md:flex-row md:justify-center md:items-end pd-12 lg:pl-[7rem] min-[1500px]:pl-[15%] lg:bottom-[7.5rem] lg:mb-12 items-center">
                            <ImageOrPlaceholder
                                className="w-[10rem] h-[10rem] rounded-[10px] p-4 bg-primary-foreground border-[1px] border-black md:w-[13rem] md:h-[13rem] lg:w-[16rem] lg:h-[16rem] object-cover object-position-[0_30%] border-b-[1px] mix-blend-multiply"
                                src={getFileUrl(getItemId(project.icon))}
                                alt={project.title}
                                width={1920}
                                height={1080}
                            />
                            <div className="mb-8">
                                <h1 className="font-extrabold text-3xl md:text-5xl">{project.title}</h1>
                                <p className="text-lg md:text-xl font-semibold text-firstColor">{project.type}</p>
                            </div>
                        </div>

                        <div className="relative bottom-20 flex flex-col justify-center items-center gap-4 sm:flex-row sm:items-end md:mb-4 xl:bottom-36 xl:right-[3%] min-[2000px]:right-[13%]">
                            <Link href={project.web || ""} target="_blank">
                                <Button color={"white"}>
                                    Projeto online <Globe size={15} />
                                </Button>
                            </Link>
                            <Link href={project.github || ""} target="_blank">
                                <Button color={"white"}>
                                    Repositório <Github size={17} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* const DescriptionProject = styled.div`
//   margin-top: -8rem;
//   text-align: center;
//   padding: 0 1rem;
//   display: grid;
//   justify-items: center;
//   align-items: center;

//   .description {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;

//     p {
//       font-size: 1rem;
//       font-weight: 500;
//       margin-bottom: 1.8rem;
//       max-width: 500px;

//       @media (min-width: 994px) {
//         font-size: 1.2rem;
//         margin-bottom: 10rem;
//         max-width: 800px;
//         text-align: center;
//       }
//     }
//   }

//   .tags {
//     border: 1px solid ${props => props.theme.border};
//     border-radius: 10px;
//     min-width: 12rem;
//     padding: 1rem;
//     background-color: ${props => props.theme.dark};
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     @media (min-width: 768px) {
//       width: 22rem;
//       padding: 1rem 2rem;
//     }

//     h4 {
//       font-size: 1.5rem;
//       color: ${props => props.theme.firstColor};
//       font-weight: 800;
//       margin-bottom: 1.5rem;

//       @media (min-width: 768px) {
//         font-size: 2rem;
//       }
//     }

//     .tag-content {
//       display: flex;
//       margin-bottom: 1rem;
//       gap: 10px;

//       img {
//         width: 1.5rem;
//       }

//       @media (min-width: 994px) {
//         font-size: 1.3rem;
//         gap: 15px;
//         text-align: center;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;

//         img {
//           width: 1.8rem;
//         }
//       }
//     }
//   }
// ` */}

                <div className="-mt-32 text-center px-4 grid justify-center items-center">
                    <div className="flex flex-col gap-8">
                        <Title>
                            <MessageSquare /> Description
                        </Title>
                        <p className="text-base font-medium mb-7 max-w-[500px] lg:text-xl lg:mb-40 lg:max-w-[800px] text-center ">{project.description}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 px-4">
                    <Title>
                        <Hash /> Skills
                    </Title>

                    <h4 className="-mt-8 mb-12 max-w-[35rem] text-start px-4 text-gray-500" style={{ textAlign: "center" }}>
                        Tecnologias usadas no desenvolvimento do projeto.
                    </h4>

                    {/* // export const TagsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   flex-wrap: wrap;
//   column-gap: 2rem;
//   row-gap: 2rem;
// ` */}

                    {/* // export const TagsContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 0.5rem;

//   .card-icon {
//     padding: 1rem;
//     border-radius: 50%;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: 0.3s ease;

//     img {
//       border-radius: 0.25rem;
//       width: 40px;
//     }
//     &:hover {
//       transform: scale(0.9);
//       border-color: transparent !important;
//     }
//     &:active {
//       transform: scale(0.8);
//       border-color: transparent !important;
//     }
//   }

//   h3 {
    
//     color: ${(props) => props.color};
//   }
// ` */}

                    <div className="flex items-center justify-center flex-wrap gap-8">
                        {project.used_skills &&
                            project.used_skills.map((used_skill) => {
                                if (typeof used_skill === "number") return;
                                if (typeof used_skill.skills_id === "number") return;
                                const rgb = hexToRgb(used_skill.skills_id?.color);
                                return (
                                    <div className="flex justify-center items-center flex-col gap-2" key={used_skill.skills_id?.id} color={used_skill.skills_id?.color}>
                                        <div
                                            className="p-4 rounded-[50%] hover:scale-90 active:scale-[.8] hover:!border-transparent active:!border-transparent w-full h-full duration-300"
                                            style={{
                                                backgroundColor: `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, .1)`,
                                                border: `1px solid ${used_skill.skills_id?.color}`
                                            }}
                                        >
                                            <ImageOrPlaceholder
                                                src={getFileUrl(getItemId(used_skill.skills_id?.icon))}
                                                alt={used_skill.skills_id?.label}
                                                width={50}
                                                height={50}
                                                className="h-[50px] w-[50px]"
                                            />
                                        </div>
                                        <h3 className="text-xl" style={{ color: used_skill.skills_id?.color }}>
                                            {used_skill.skills_id?.label}
                                        </h3>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                {/* styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   justify-content: start;
  
//   margin-top: 3rem;
//   margin-bottom: 14rem;

//   @media (min-width: 768px) {
//     margin-top: 7rem;
//   }
// ` */}

                {/* export const PrintContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width: 1300px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
` */}

                {/* export const Gif = styled.div`
  padding: 3rem 1rem 0 1rem;
  margin: 0 auto;
  
  @media(min-width: 1300px) {
    display: inline-block;
    position: sticky;
    top: 1px;
    max-width: 500px;
    max-height: 650px;
  }

  h2 {
    color: ${props => props.theme.secondColor};
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  p {
    color: ${props => props.theme.gray};
    font-size: 1.1rem;
    
    span {
      color: ${props => props.theme.emerald_400};
      font-weight: 600;
    }
  }

  h5 {
    margin-top: 2rem;
    color: ${props => props.theme.gray_medium};
    font-size: 1rem;
  }

  .preview {
    width: 15rem;
    border-radius: 4px;

    @media (min-width: 468px) {
      width: 25rem;
    }

    @media (min-width: 768px) {
      width: 28rem;
    }

    @media (min-width: 1300px) {
      width: 30rem;
    }
  }
` */}

                <div className="flex flex-col items-center justify-center mt-12 mb-[14rem] md:mt-28">
                    <Title>
                        <ImageIcon /> Screen
                    </Title>

                    <div className="flex items-center flex-col xl:flex-row xl:items-start xl:justify-between">
                        <div className="pt-12 px-4 mx-auto my-0 xl:inline-block xl:sticky xl:top-[1px] xl:max-w-[500px] xl:max-h-[650px]">
                            <h2 className="text-4xl mb-5 text-secondColor">Detalhes</h2>
                            <p className="text-gray-500 text-lg">
                                Nome: <span className="text-base text-green-500">{project.title}</span>
                            </p>
                            <p className="text-gray-500 text-lg">
                                Status: <span className="text-base text-green-500">{project.status}</span>
                            </p>
                            <p className="text-gray-500 text-lg">
                                Ano: <span className="text-base text-green-500">{project.year}</span>
                            </p>
                            <h5 className="mt-8 text-gray-300 text-base">Preview</h5>
                            <video className="w-60 rounded-[4px] sm:w-[25rem] md:w-[28rem] xl:w-[30rem]" loop autoPlay muted playsInline>
                                <source src={getFileUrl(getItemId(project.preview))} />
                            </video>
                        </div>

                        {/* export const Print = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .print-list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }

    h3 {
      color: ${props => props.theme.secondColor};
      margin-top: 3.7rem;
      font-size: 1.5rem;
      font-weight: 700;

      @media(min-width: 768px) {
        font-size: 2rem;
      }
    }
  
    p {
      color: ${props => props.theme.gray};
      padding: 0 1rem;
      margin-bottom: .4rem;
    }
  }

  width: 18rem;

  @media (min-width: 468px) {
    width: 25rem;
  }

  @media (min-width: 768px) {
    width: 35rem;
  }

  @media (min-width: 994px) {
    width: 50rem;
  }
` */}

                        <div className="flex justify-center items-center flex-col w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[50rem]">
                            {project.screenshots &&
                                project.screenshots.map((screenshot) => {
                                    if (typeof screenshot === "number") return;
                                    return (
                                        <div className="flex justify-center items-center flex-col" key={screenshot.id}>
                                            <h3 className="mt-14 text-2xl font-bold text-secondColor md:text-4xl">{screenshot.name}</h3>
                                            <p className="text-gray-500 px-4 mb-[.4rem]">{screenshot.description}</p>
                                            <ImageOrPlaceholder
                                                className="object-contain rounded-[10px] w-full h-full"
                                                width={770}
                                                height={460}
                                                src={getFileUrl(getItemId(screenshot.image))}
                                                alt={screenshot.name}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5rem;
  margin-bottom: 10rem;
  border-top: 2px solid ${props => props.theme.dark};
  border-bottom: 2px solid ${props => props.theme.dark};


  @media(min-width: 468px) {
    margin-top: 10rem;
  }

  .buttonHome {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imageVideo {
    @media(max-width: 468px) {
      display: none;
    }
    img {
      z-index: -1;
      width: 100%;
      opacity: 0.5;
      object-fit: cover;
    }
  }

  .title-video {
    z-index: 10;
    position: absolute;
    top: -15rem;

    @media(min-width: 468px) {
      top: -10rem;
    }
  }
` */}

                <div className="flex flex-col justify-center items-center relative mt-20 mb-40 border-y-2 border-solid border-y-black sm:mt-40">
                    <div className="sm:hidden">
                        <ImageOrPlaceholder width={200} height={200} className="-z-10 w-full opacity-50 object-cover" src={getFileUrl(getItemId(project.image))} alt={project.title} />
                    </div>
                    <Title className="z-10 absolute -top-60 sm:-top-40">
                        <Youtube /> Video
                        <ImageOrPlaceholder width={200} height={200} className="vector" src="/vectors/youtube.svg" alt="logo do YouTube" />
                    </Title>
                    
                    {/* export const Video = styled.div`
  //margin-bottom: 5rem;
  z-index: 10;
  position: absolute;
  opacity: 1;

  @media (min-width: 468px) {
    width: 25rem;
    height: 13.3rem;
  }
  @media (min-width: 768px) {
    width: 35rem;
    height: 18.6rem;
  }
  @media (min-width: 994px) {
    width: 40rem;
    height: 21.2rem;
  }
  @media (min-width: 1200px) {
    width: 60rem;
    height: 32.1rem;
  }
` */}

                    
                    <div className="z-10 absolute opacity-100 sm:w-[25rem] sm:h-[13.3rem] md:w-[35rem] md:h-[18.6rem] lg:w-[40rem] lg:h-[21.2rem] xl:w-[60rem] xl:h-[32.1rem]">
                        <ReactPlayer url={getFileUrl(getItemId(project.preview))} width="100%" height="100%" controls={true} pip config={{ file: { forceHLS: true } }} />
                    </div>
                </div>

                {/* 
                <Link href={"/#projects"}>
                    <Button variant={"outline"}>
                        <ArrowLeft style={{ marginBottom: "-0.2rem" }} size={18} /> Voltar
                    </Button>
                </Link> */}
            </div>
        </>
    );
}
