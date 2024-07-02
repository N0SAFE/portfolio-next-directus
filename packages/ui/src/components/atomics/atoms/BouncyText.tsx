import * as React from "react";
import { cn } from '../../../lib/utils';

// font-size: 1.2rem;
//         transition: all;
//         transition-duration: 500ms;

//         &:hover {
//           color: ${props => props.theme.firstColor};
//           transition-duration: 100ms;
//           margin-top: -.5rem;
//         }

const BouncyText: React.FC<{ children: string, className?: string }> = ({ children, className }) => {
    return children.split("").map((letter, index) => {
        return (
            <span key={index} className={cn("ui-transition-all hover:ui-bg-white ui-duration-500 hover:ui-text-blue-500 hover:-ui-mt-2 hover:ui-duration-100", className)}>
                {letter}
            </span>
        );
    });
};

export default BouncyText;
