import React, { useState } from 'react';
import s from './Users.module.css';


let Paginator = (props) => {

    let countPage = Math.ceil(props.countUser / props.count);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    let countLetter = Math.ceil(countPage/10);
    let [tekLetter, setTekLetter]=useState(1);
    let leftposition = (tekLetter-1)*10+1;
    let rightposition = tekLetter*10;


    return (
        <div>
            {tekLetter>1 && 
            <button className={s.but} onClick={()=>{setTekLetter(tekLetter-1)}}>Назад</button>   
            }            
                {pages.filter(u=>u>=leftposition && u<=rightposition).map(element => {
                    return <span className={s.paginator+" "+(element === props.tekPage ? s.activeSpan : "")} onClick={(e) => { props.updatetekUser(element) }}>{element}</span>
                })}            
            {tekLetter<countLetter && 
            <button className={s.but} onClick={()=>{setTekLetter(tekLetter+1)}}>Вперед</button>    
            }
        </div >
    )
}

export default Paginator;