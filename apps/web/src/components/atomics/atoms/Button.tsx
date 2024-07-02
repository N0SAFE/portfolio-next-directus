import { cn } from "@/lib/utils";
import React from "react";
// export const ButtonAlt = styled.button`
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 7px;
//   cursor: pointer;
//   border: 0.25em solid ${props => props.theme.secondColor};
//   padding: 1rem 2rem;
//   color: ${props => props.theme.text};
//   font-size: 1rem;
//   font-weight: 700;
//   background-color: transparent;
//   border-radius: 1em;
//   outline: none;
//   position: relative;
//   transition: all 0.3s;

//   &:hover {
//     color: black;
//     background-color: ${props => props.theme.white};
//     box-shadow: 0 0 1em 0.25em ${props => props.theme.hoverSecond},
//       0 0 4em 2em ${props => props.theme.hoverSecond},
//       inset 0 0 0.75em 0.25em ${props => props.theme.white};
//   }
// `

const Button = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(function Button({ className, ...props }, ref) {
    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex justify-center items-center text-center gap-2 cursor-pointer border-[0.25rem] border-solid border-secondColor py-4 px-8 font-bold bg-[transparent] rounded-[1em] outline-none relative transition-all duration-300 hover:text-black hover:bg-white",
                "hover:shadow-hoverSecond hover:shadow-[0_0_1em_0.25em_hoverSecond,_0_0_4em_2em_hoverSecond,inset_0_0_0.75em_0.25em_white]",
                className
            )}
            {...props}
        >
            {props.children}
        </button>
    );
});

export default Button;
