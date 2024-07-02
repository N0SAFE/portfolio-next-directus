import { cn } from "@/lib/utils";
import React from "react";

// export const Title = styled.h2`
//   position: relative;
//   font-size: 2.2rem;
//   font-weight: 800;
//   margin: 2rem 0;
//   padding-top: 2.1rem;
//   color: ${props => props.theme.firstColor};
//   z-index: 1;
//   opacity: 1;

//   @media (min-width: 994px) {
//     font-size: 3.5rem;
//   }

//   p {
//     font-size: 1.2rem;
//     line-height: 1.25rem;
//     font-family: monospace;
//     position: absolute;
//     text-align: center;
//     top: -1.5rem;
//     color: ${props => props.theme.secondColor};
//   }

//   span {
//     z-index: -1;
//     display: grid;
//     gap: 0.8rem;
//     grid-template-columns: 1fr 1fr;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 3px;
//     left: 50%;
//     right: 50%;
//     color: ${props => props.theme.secondColor};
//     opacity: 0.2;
//     font-weight: 800;
//     font-size: 2.6rem;

//     @media (min-width: 370px) {
//       top: -0.8rem;
//       font-size: 3rem;
//     }

//     @media (min-width: 994px) {
//       top: -0.8rem;
//       font-size: 4.5rem;
//     }
//   }

//   .vector {
//     position: absolute;
//     width: 2rem;
//     bottom: 5rem;
//     z-index: -10;

//     animation: bounce 1s infinite;

//     @keyframes bounce {
//       0%,
//       100% {
//         transform: translateY(-25%);
//         animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//       }
//       50% {
//         transform: translateY(0);
//         animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//       }
//     }

//     @media (min-width: 468px) {
//       bottom: 7rem;
//       width: 3rem;
//     }

//     @media (min-width: 944px) {
//       width: 5rem;
//     }

//     @media (min-width: 1300px) {
//       width: 8rem;
//       bottom: 7.5rem;
//     }
//   }
// `

const Title = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function Title({ children, className, ...props }, ref) {
    return (
        <h2 ref={ref} className={cn("flex text-6xl my-8 pt-8 text-firstColor", className)} {...props}>
            {children}
        </h2>
    );
});

export default Title;
