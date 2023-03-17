import React from 'react'

const ProjectCard = ({ image, imagealt, title, description, tags, source, visit }) => {

    return (
        <div className="app__projects-card">
            <img src={image} alt={imagealt} />
            <div className="app__projects-card-title_area">
                <h3 className="app__projects-card-title">{title}</h3>
                <hr className="app__projects-card_hr" />
            </div>
            <p className="app__projects-card-info">{description}</p>
            <div className="">
                <hr className="app__projects-card_hr" />
                <div className="app__projects-card-title">Stack</div>
                <ul className="app__projects-card_footer-taglist">
                    {tags.map((tag, i) => (
                        <li className="app__projects-card_footer-tag" key={i}>{tag}</li>
                    ))}
                </ul>
            </div>
            <ul className="app__projects-card_utility-list">
                <li><a className="app__projects-card_utility-list_code" href={source} target="_blank" rel="noreferrer">Code</a></li>
                <li><a className="app__projects-card_utility-list_code" href={visit} target="_blank" rel="noreferrer"> Visit</a></li>
            </ul>
        </div>
    )
}

export default ProjectCard