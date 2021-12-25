import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.item} src='https://img2.freepng.ru/20190306/jak/kisspng-logo-portable-network-graphics-image-graphic-desig-userevan-amos-5c804535953d07.6828221215519101976113.jpg' />
            <NavLink to={"/dialogs/"+props.id} className={s.dialog} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>

    )
}

export default Dialog;