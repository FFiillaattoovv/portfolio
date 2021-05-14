import React from 'react';
import style from './Skills.module.css';
import StyleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${StyleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'JavaScript'}
                           description={'Excepturi inventore ipsa itaque.'}/>
                    <Skill title={'TypeScript'}
                           description={' Accusamus alias aspernatur corporis omnis pariatur reprehenderit, voluptates!'}/>
                    <Skill title={'React/Redux'}
                           description={'Minus molestias placeat quidem quos recusandae rerum sit voluptatem voluptatum!'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
