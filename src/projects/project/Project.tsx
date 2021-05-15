import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    image: string
    title: string
    description: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.projectContainer}>
            <img className={style.image} src={props.image}/>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <button className={style.button}>Смотреть</button>
        </div>
    );
}

export default Project;
