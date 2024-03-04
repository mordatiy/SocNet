import React from 'react';
import c from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {maxLengthCreator, required} from "../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    // console.log(props);
    // console.log('Dialogs')

    let dialogsElements = props.dialogsPage.dialogsData.map( dialog => (<DialogsItem key={dialog.id} id={dialog.id} name={dialog.name}></DialogsItem>));
    let messagesElements = props.dialogsPage.messagesData.map( message => (<Message key={message.id} message={message.message}></Message>));

    //console.log(dialogsElements)

    // if (props.isAuth === false) return <Navigate to="/login/" replace={true} />
    const addNewMessage = (formData) => {
        //console.log("AddMessageForm formData: ", formData.newMessageForm)
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={c.messages}>
                    <div>{ messagesElements }</div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

// const AddMessageForm = (props) => {
//     return (
//         <form action="" onSubmit={props.handleSubmit}>
//             <div>
//                 {/*<Field component="textarea" placeholder={"Enter below"} name="newMessageBody"  />*/}
//                 <Field
//                     component={Textarea}
//                     name="newMessageBody"
//                     placeholder={"Enter text here"}
//                     validate={[ required, maxLength10 ]} />
//             </div>
//             <div>
//                 <button>Send</button>
//             </div>
//         </form>
//     )
// }
//
// const AddMessageFormRedux = reduxForm({
//     form: 'dialogAddMessageForm'
// })(AddMessageForm);

export default Dialogs;