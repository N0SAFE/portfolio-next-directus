"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BouncyText from "@repo/ui/components/atomics/atoms/BouncyText";
import { Github, Menu, X, Linkedin } from "lucide-react";
import { Sheet, SheetContent } from "@repo/ui/components/shadcn/sheet";

// position: fixed;
//   width: 100%;
//   top: 0;
//   height: 3.5rem;
//   font-weight: 600;
//   font-size: 1.2rem;
//   position: relative;
//   z-index: 10;
//   background: ${props => props.theme.background};

//   a {
//     color: ${props => props.theme.textPrimary};
//   }

//   @media (min-width: 995px) {
//     display: flex;
//     height: 4rem;
//     justify-content: space-around;
//     padding: 1rem 0;
//     align-items: center;
//     box-shadow: ${props => props.theme.background} 0px 10px 30px 1px;
//   }

//   @media (min-width: 2000px) {
//     display: flex;
//     justify-content: space-evenly;
//   }

//   .mobile-content {
//     font-weight: 700;
//     font-size: 1.2rem;

//     a {
//       display: flex;
//       align-items: center;

//       .logo {
//         margin-right: .5rem;
//       }

//       .logo-name {
//         font-size: 1.2rem;
//         transition: all;
//         transition-duration: 500ms;

//         &:hover {
//           color: ${props => props.theme.firstColor};
//           transition-duration: 100ms;
//           margin-top: -.5rem;
//         }
//       }
//     }

//     @media (max-width: 994px) {
//       margin: 0.5rem 1rem;
//     }
//   }

// display: none;
//   @media (max-width: 994px) {
//     display: block;
//     position: absolute;
//     top: 1rem;
//     right: 1rem;
//     cursor: pointer;
//     z-index: 20;
//   }

// export const NavMenu = styled.nav<Click>`
//   @media (max-width: 994px) {
//     height: 100vh;
//     width: 100vw;
//     background: ${props => props.theme.background};
//     z-index: 10;
//     opacity: 0.95;
//     position: fixed;
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//     transition: transform 0.5s ease-in-out;
//   }

//   ul {
//     display: flex;
//     gap: 1.2rem;
//     justify-content: center;
//     align-items: center;

//     a {
//       gap: 2px;
//       font-size: 1.1rem;
//       font-weight: 600;
//       color: ${props => props.theme.textPrimary};
//       height: 1rem;
//       cursor: pointer;

//       span {
//         line-height: 1.08;
//         white-space: nowrap;
//         position: relative;

//         &:before {
//           content: '';
//           height: 2px;
//           width: auto;
//           background-color: ${props => props.theme.firstColor};
//           border-radius: 0px 0px 4px 4px;
//           position: absolute;
//           bottom: -6px;
//           left: 0px;
//           right: 0px;
//           opacity: 0;
//           transform-origin: left center;
//           transform: scaleX(0);
//           transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//           visibility: hidden;
//         }
//       }

//       &:hover {
//         color: ${props => props.theme.firstColor};
//         span:before {
//           transform: scaleX(1);
//           visibility: visible;
//           opacity: 1;
//         }
//       }
//     }

//     @media (max-width: 994px) {
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       padding-top: 1.5rem;
//       gap: 1.8rem;
//     }
//   }
// `

// @media (min-width: 995px) {
//     display: none;
//   }

// export const Icons = styled.div`
//   @media (min-width: 995px) {
//     display: none;
//   }

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1.1rem;
//   margin-top: 1.7rem;
//   font-size: 1.5rem;
//   cursor: pointer;
// `

function Header() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <header className="w-full top-0 h-[3.5rem] font-semibold text-lg relative z-10 flex">
            <div className="font-bold child:flex py-2 px-4 flex justify-around w-full">
                <Link href={"/"} className="flex items-end">
                    <div className="mr-2">
                        <Image className="logo" width={30} height={30} src="/public/icon.svg" alt="logo" />
                    </div>

                    <div className="flex">
                        <BouncyText>Sebille</BouncyText>
                    </div>
                </Link>
                <div>
                    <Sheet>
                        <SheetContent className="flex justify-center items-center"></SheetContent>
                    </Sheet>
                    <ul className="lg:flex gap-5 justify-center items-center hidden">
                        <li>
                            <Link href={"/"}>
                                <span>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/about"}>
                                <span>Sobre</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/experience"}>
                                <span>Experiência</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/projects"}>
                                <span>Projetos</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/resume"}>
                                <span>Resume</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/contact"}>
                                <span>Contato</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="lg:hidden cursor-pointer z-20 flex items-center" onClick={handleOpen}>
                        {open ? <X size={25} /> : <Menu size={25} />}
                    </div>
                </div>
            </div>

            {/* <nav onClick={handleOpen}>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/about"}>
                            <span>Sobre</span>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/experience"}>
                            <span>Experiência</span>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/projects"}>
                            <span>Projetos</span>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/resume"}>
                            <span>Resume</span>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/contact"}>
                            <span>Contato</span>
                        </Link>
                    </li>
                </ul>

                <div className="lg:ui-hidden ui-flex ui-justify-center ui-items-center ui-gap-4 ui-mt-7 ui-text-2xl ui-cursor-pointer">
                    <Link href={"https://github.com/EvanderInacio"} target="_blank" aria-label="Github link">
                        <Github />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/evander-inacio/"} target="_blank" aria-label="Linkedin link">
                        <Linkedin />
                    </Link>
                </div>
            </nav> */}
        </header>
    );
}

export default Header;
