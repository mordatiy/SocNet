import c from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";



const Dialogs = (props) => {
    // console.log(props);
    // console.log('Dialogs')

    let dialogsElements = props.dialogsPage.dialogsData.map( dialog => (<DialogsItem key={dialog.id} id={dialog.id} name={dialog.name}></DialogsItem>));
    let messagesElements = props.dialogsPage.messagesData.map( message => (<Message key={message.id} message={message.message}></Message>));

    //console.log(dialogsElements)

    let onChangeNewMessage = (e) => {
        let newMessage = e.target.value;
        props.changeNewMessage(newMessage)
    }
    let onSendMessage = () => {
        props.sendMessage()
    }

    // alert(props.isAuth)

    // if (props.isAuth === false) return <Navigate to="/login/" replace={true} />

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={c.messages}>
                    <div>{ messagesElements }</div>
                    <div>
                        <div>
                            <textarea
                                value={props.dialogsPage.newMessageTxt}
                                onChange={ onChangeNewMessage }
                                placeholder="ENTER below"
                                onContextMenu={ () => {console.log("21")} }
                            ></textarea>
                        </div>
                        <div>
                            <button onClick={ onSendMessage } >Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;