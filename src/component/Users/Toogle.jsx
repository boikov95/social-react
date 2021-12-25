import React from 'react';
import tooglephoto from '../../photo/loading.gif'

let Toogle = (props) => {
    return (
        <div>
            <img src={props.isFetching ? tooglephoto : null} style={{ width: '105px' }}></img>
        </div>
    )
}

export default Toogle