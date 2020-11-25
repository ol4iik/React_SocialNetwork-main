
import React from 'react';
import style from './Dialogs.module.css';

let Dialogs = (props) => {
let generateMessages = props.messages.map(m => {
    return <div className={m.id%2 ? style.leftMes : style.rightMes } key={m.id}> 
        {m.message}
    </div>})

    const onUpdateNewMessageText = (e) => {
        props.updateMessageText(e.currentTarget.value);
    }

    const onAddMessage = () => {
        props.addMessage();
        props.updateMessageText('');
    }

    return(
        <div>
            {generateMessages}

            <div className={style.forms}>
                <textarea onChange={onUpdateNewMessageText} cols='50' value={props.messageText}></textarea>
                <button  onClick={onAddMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;