"use client";

import React from "react";
import R, { ReactPlayerProps } from "react-player";

const ReactPlayer: React.FC<ReactPlayerProps> = (props) => {
    return <R {...props} />;
};

export default ReactPlayer;
