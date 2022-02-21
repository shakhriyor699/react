import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import react from 'react';



const Dialogs = (props) => {
    let dialogsData = props.newData.messagesPage.dialogsData
    let messagesData = props.newData.messagesPage.messagesData
    console.log(dialogsData);
    let dialogsElement = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    let messagesElements = messagesData
        .map(message => <Message message={message.message} key={message.id}/>)


    let ref = React.createRef()

    let add = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = ref.current.value
        props.updateMessage(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea onChange={onMessageChange} value={props.newData.messagesPage.newMessagePost} ref={ref}></textarea>
            <button onClick={add}>add</button>
        </div>
    )
}

export default Dialogs