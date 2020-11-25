import { useEffect, useState } from 'react';
import style from './Profile.module.css';
import React from 'react';

const ProfileStatus = React.memo(props => {

    let [editMode, setEditMode] = useState(false);
    
    let [statusL, setStatusL] = useState(props.userStatus);
 
    const editModeFunc = () => {
        setEditMode(true);
    }
    
    useEffect( () => {
        setStatusL(props.userStatus);
    },
    [props.userStatus]
    )

    const setStatusS = () => {
        setEditMode(false);
        props.updateStatus(statusL);
    }

    return (<div>

        {editMode
            ? <input className={style.status}
                autoFocus={true}
                type="text"
                value={statusL}
                onChange={(e) => setStatusL(e.currentTarget.value)}
                onBlur={setStatusS} />
            : <div title='Press to change' onClick={editModeFunc} className={style.status + ' ' + style.statusText}>
                Status : {props.userStatus ? props.userStatus : 'No status'}
            </div>
        }


    </div>);
})

export default ProfileStatus;