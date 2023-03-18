import React from 'react'

const ProjectCard = ({ image, imagealt, title, description, tags, source, visit }) => {

    return (
        <div className="w-full  rounded-[10px]  shadow-md shadow-gray-800 justify-center">
            <img className="w-full object-cover
             overflow-hidden" src={image} alt={imagealt} />
            <div className="text-center z-20 w-full">
                <h3 className="font-manrope font-medium tracking-[1px] text-projcolor py-[0.5rem] px-0 text-[20px] md:text-[2rem]">{title}</h3>
                <hr className="w-[50px] h-[3px] my-[20px] mx-auto border-0 bg-[#d0bb57] " />
            </div>
            <p className="p-[.3rem] sm:py-0 sm:px-[50px] text-[#e4e6e7] leading-[24px] text-justify">{description}</p>
            <div className="">
                <hr className="w-[50px] h-[3px] my-[20px] mx-auto border-0 bg-[#d0bb57]" />
                <div className="text-center z-20 w-full text-scredhover text-[1.5rem]">Stack</div>
                <ul className="flex justify-around p-[1rem] flex-wrap">
                    {tags.map((tag, i) => (
                        <li className="text-[#d8bfbf]" key={i}>{tag}</li>
                    ))}
                </ul>
            </div>
            <ul className="list-none p-0 flex justify-around my-[2.5rem]">
                <li><a className="text-[#d4c0c0] text-[1.6rem] py-[1rem] px-[1.5rem] bg-scred rounded-[15px] ease-out hover:bg-scredhover" href={source} target="_blank" rel="noreferrer">Code</a></li>
                <li><a className="text-[#d4c0c0] text-[1.6rem] py-[1rem] px-[1.5rem] bg-scred rounded-[15px] ease-out hover:bg-scredhover" href={visit} target="_blank" rel="noreferrer"> Visit</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard