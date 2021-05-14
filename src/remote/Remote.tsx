import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container}  ${style.remoteContainer}`}>
                <div className={style.remote}>
                    <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                    <button className={style.button}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Remote;