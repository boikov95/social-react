import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://img2.freepng.ru/20190306/jak/kisspng-logo-portable-network-graphics-image-graphic-desig-userevan-amos-5c804535953d07.6828221215519101976113.jpg' />
            <div className={s.auth}>
                {props.isAuth ? <div>{props.login} <button onClick={props.userLoginOut}>LogOut</button> </div> : <NavLink to={`/login`} activeClassName={s.activeLink}>Login</NavLink>}
            </div>
        </header>


    )
}

export default Header;