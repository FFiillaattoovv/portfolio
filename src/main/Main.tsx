import React from 'react';
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Максим Филатов</h1>
                    <p>Я frontend разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
