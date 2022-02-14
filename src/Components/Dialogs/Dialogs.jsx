import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'



const Dialogs = (props) => {
    let dialogsData = props.dialogsData
    let messagesData = props.messagesData
    
    let dialogsElement = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    let messagesElements = messagesData
        .map(message => <Message message={message.message} key={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs