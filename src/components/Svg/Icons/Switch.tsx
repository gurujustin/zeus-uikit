import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path d="M4 17L8 13M8 7H20H8ZM20 7L16 3L20 7ZM20 7L16 11L20 7ZM16 17H4H16ZM4 17L8 21L4 17Z" 
            stroke="#448348" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />    
    </Svg>
  );
};

export default Icon;
