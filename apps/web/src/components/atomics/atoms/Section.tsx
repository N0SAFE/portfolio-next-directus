"use client"

import * as React from "react";

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <section className="ui-pt-28 flex ui-justify-center ui-items-center flex-col ui-gap-20">{children}</section>;
};

export default Section;
