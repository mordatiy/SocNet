import c from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import DialogsTest from "./DialogsTest";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserProfile} from "../../redux/profile-reducer";

// console.log('DialogsContainer')

let mapStateToProps = (state) => {
    // console.log('mapStateToProps')
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps')
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)