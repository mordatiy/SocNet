import React from "react";
import s from './ProfileInfo.module.css'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsConrols";
import {required} from "../../utils/validators/validators";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form action="" onSubmit={handleSubmit}>
        <div><button onClick={ ()=> {} } >Save</button></div>
        {/*<h2>{profile.fullName}</h2>*/ }
        {error && <div className={s.mainError}>{error}</div> }
        <div>
            <b>Full Name: </b>
            {createField("FullName", "fullName", [ required ], Input, {type: "text"}, "" )}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("lookingForAJob", "lookingForAJob", [], Input, {type: "checkbox"}, "")}
        </div>

        <div><b>My Professional Skills:</b>
            {/*{profile.lookingForAJobDescription}*/}
            {createField("My Professional Skills", "lookingForAJobDescription", [], Textarea, {type: "text"}, "")}
        </div>

        <div><b>About Me:</b>
            {/*{profile.aboutMe}*/}
            {createField("About Me", "aboutMe", [], Textarea, {type: "text"}, "")}
        </div>


        <div>Contacts:
            { Object.keys(profile.contacts).map( key => {
                return <div key={"contacts"+key} className={s.contact}>
                    <b>{key}:</b>
                    {createField(key, "contacts."+key, [], Input, {type: "text"}, "")}
                </div>
            })
            }
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;
