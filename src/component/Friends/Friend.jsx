import React from 'react';
import s from './Friend.module.css';
import People from './Friend/People';



const Friend = (props) => {
    let people = props.friend.map(element => <People people={element.name} />)
    return (
        <div>
            <div className={s.friend}>MyFriend</div>
            <div>
                {people}
            </div>
        </div>
    );
}

export default Friend;