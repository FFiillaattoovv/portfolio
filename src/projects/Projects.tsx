import React from 'react';
import style from './Projects.module.css';
import Project from './project/Project';
import StyleContainer from '../common/styles/Container.module.css';

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${StyleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Мои проекты</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at atque consequuntur                                          illum inventore, iusto sapiente?'}
                             image={'https://th.bing.com/th/id/OIP.A3Qa0-BgS3snCjxeRbRcfgHaEV?w=305&h=180&c=7&o=5&dpr=1.4&pid=1.7'}
                    />
                    <Project title={'Social network'}
                             description={'Asperiores assumenda commodi dolore ipsam nobis, quaerat quasi repellendus rerum voluptas                                          voluptatum. Eaque, voluptates!'}
                             image={'https://th.bing.com/th/id/OIP.DT9eHW2fM6SiTPv0pzbJkAHaDt?w=347&h=174&c=7&o=5&dpr=1.4&pid=1.7'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
