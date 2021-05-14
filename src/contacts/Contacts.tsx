import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form action="" method="post" className={style.contacts}>
                    <div>
                        <input type="text" id="name" name="user_name" placeholder="Name"/>
                    </div>
                    <div>
                        <input type="email" id="mail" name="user_mail" placeholder="E-mail"/>
                    </div>
                    <div>
                        <textarea id="msg" name="user_message" placeholder="Your message"></textarea>
                    </div>
                </form>
                    <button type="submit" className={style.button}>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;