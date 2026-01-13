export interface BioImage{
    src: string;
    alt: string;
    caption: string;
}

export const bioStory = `

Hi, I'm [Christian], a Master's student at Imperial College London, based in South Kensington. 

I describe myself as a T-shaped Design Engineer. This means that I love navigating wide solution spaces just as much as I enjoy diving into technical niches. My skillset spans the entire product journey, from initial strategy and sketching, all the way to tolerances and PCB layouts.

Currently, I’m applying this approach to my Master's project in collaboration with a large consumer technology company, bringing together wide experience in product development with specific depth in full-stack embedded prototyping.

I’ve been lucky to work with some amazing teams along the way. My background includes designing products for 2050 at Tsinghua University, working with the V&A Youth Collective, and an internship at AirEmail.

Some projects I've enjoyed in the past:

[Balance], [Car CFD], [Electronic Hanger], [eVTOL], [Street Market Clamps], [Sustainable Systems], [Limoonal], [Monotonic Noise], [Coat], [Hip FEA], [Khet]

`;

export const bioData: Record<string, BioImage> = {
    "christian": {
        src: "/biography/me.jpg",
        alt: "Photo of Christian in Battersea Park, London",
        caption: "Battersea Park, London"
    },
    "street market clamps": {
        src: "/biography/clamp.jpg",
        alt: "Prototype of street market clamps",
        caption: "Final working prototype of an electric tool designed to replace manual street market clamps"
    },
    "balance": {
        src: "/biography/balance.png",
        alt: "Video screenshot",
        caption: "A screenshot from the film \"Balance\", a Blender GreasePencil animation exploring work life balance."
    },
    "car cfd": {
        src: "/biography/car.jpg",
        alt: "Car prototype photo",
        caption: "CFD work on a windscreen-less car I designed and surface modelled, demonstrating the \"bubble effect\""
    }, 
    "electronic hanger": {
        src: "/biography/hanger.jpg",
        alt: "Hanger prototype photo",
        caption: "A electronic prototype of a measure tape, to help users interface with better fitting clothes."
    },
    "evtol": {
        src: "/biography/evtol.jpg",
        alt: "eVTOL aircraft prototype photo",
        caption: "A concept render of an eVTOL aircraft, designed for urban air mobility."
    },
    "sustainable systems": {
        src: "/biography/vape.jpg",
        alt: "Sustainable systems diagram",
        caption: "Full teardown and lifecycle analysis of vapes, with recommendations for more sustainable systems."
    },
    "limoonal": {
        src: "/biography/limoonal.jpg",
        alt: "Limoonal lamp photo",
        caption: "A lamp I made, inspired by Gary McMillans \"Limoonal\". Exhibited at the Blythe Gallery, London."
    },
    "monotonic noise": {
        src: "/biography/monotonic.webp",
        alt: "Monotonic noise lamp photo",
        caption: "A fully functional electric desk lamp crane, with joysticks to operate it's movement."
    },
    "coat": {
        src: "/biography/jacket.jpg",           
        alt: "Jacket product photo",
        caption: "The inside of a coat I sewed for myself."
    },
    "hip fea": {
        src: "/biography/hip.png",      
        alt: "Hip FEA simulation image",
        caption: "Hip replacement FEA simulation and analysis"
    },      
    "khet": {   
        src: "/biography/khet.jpg",         
        alt: "Khet product photo",
        caption: "Web-app version of the laser board game Khet, built to learn JavaScript."
    }   
}

