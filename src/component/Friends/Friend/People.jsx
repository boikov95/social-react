import React from 'react';
import s from './People.module.css';


const People = (props) => {
    return (
        <div className={s.blockFriend}>
            <div className={s.faceFriend}>
                <img src='https://img2.freepng.ru/20190306/jak/kisspng-logo-portable-network-graphics-image-graphic-desig-userevan-amos-5c804535953d07.6828221215519101976113.jpg' />
            </div>
            <div className={s.Friend}>
                {props.people}
            </div>
        </div>
    );
}



export default People;