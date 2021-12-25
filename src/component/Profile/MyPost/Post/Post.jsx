import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.item} src='https://img2.freepng.ru/20190306/jak/kisspng-logo-portable-network-graphics-image-graphic-desig-userevan-amos-5c804535953d07.6828221215519101976113.jpg' />
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;