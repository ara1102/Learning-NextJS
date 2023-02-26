import React from 'react'
import EmailLogo from './emailLogo'
import EyeLogo from './EyeLogo';
import PhoneLogo from './PhoneLogo'
import WorldLogo from './WorldLogo';

type svgProps = {
    svg: string;
}

const SVGComponent = ({svg}:svgProps) => {

    if(svg === "email"){
        return (
            <EmailLogo/>
        )
    }else if(svg === "phone"){
        return(
                <PhoneLogo/>
        ) 
    }else if(svg === "eye"){
        return(
            <EyeLogo/>
        )
    }else if(svg === "world"){
        return(
            <WorldLogo/>
        )
    }
    return(
        <>
        </>
    )
    
}

export default SVGComponent