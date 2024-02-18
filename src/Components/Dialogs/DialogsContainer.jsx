import c from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            //console.log('sendMessage')
            dispatch(addMessageCreator());
        },
        changeNewMessage: (txt) => {
            //console.log(txt)
            dispatch(updateNewMessageCreator(txt));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;