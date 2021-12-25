import React, { useEffect, useState } from 'react';


const StatusProfile = (props) =>{
    
    let [isStatus, setIsStatus]=useState(false);
    let [Status, setStatus]=useState(props.status);

    useEffect (()=>{
        setStatus(props.status);
    },[props.status]);

    const activate = () =>{        
        setIsStatus(true);
    }

    const deactivate = () =>{
        setIsStatus(false);   
        props.updateStatus(Status);  
    }

    const change = (e) =>{
        setStatus(e.target.value);
    }
    
    return ( 
        <div>
        {!isStatus &&
        <div>
        <span onDoubleClick={activate}>{Status || "-----"}</span>            
        </div>     
        }
        {isStatus &&      
        <div>
        <input onChange={change} autoFocus={true} onBlur={deactivate} value={Status} />
        </div>
        }
        </div>
    )
}

export default StatusProfile