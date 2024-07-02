import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(function Container({ children, className, ...props }, ref) {
    return (
        <section ref={ref} className={cn("ui-pt-8 flex ui-justify-center ui-items-center flex-col", className)} {...props}>
            {children}
        </section>
    );
});

export default Container;