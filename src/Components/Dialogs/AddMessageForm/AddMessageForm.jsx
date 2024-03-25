import React from 'react';
import form from "redux-form/lib/Form";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsConrols";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                {/*<Field component="textarea" placeholder={"Enter below"} name="newMessageBody"  />*/}
                <Field
                    component={Textarea}
                    name="newMessageBody"
                    placeholder={"Enter text here"}
                    validate={[ required, maxLength10 ]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);