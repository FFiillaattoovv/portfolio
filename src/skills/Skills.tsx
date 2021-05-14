import React from 'react';
import style from './Skills.module.css';
import StyleContainer from '../common/styles/Container.module.css';

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${StyleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <h3>Skill</h3>
                </div>
            </div>
        </div>
    );
}

export default Skills;
