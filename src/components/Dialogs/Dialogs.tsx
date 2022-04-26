import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators/validators";


export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageText: string
}
export type dialogsType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
    sendMessageAC: (newMessageBody: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> )


    let addNewMessage = (values: MessageFormDataType) => {
        props.sendMessageAC(values.newMessageBody);
        values.newMessageBody = " ";

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
               <div>
                   <AddMessageFormRedux onSubmit={addNewMessage} />
               </div>
            </div>
        </div>
    )
}

type MessageFormDataType = {
    newMessageBody: string
}
const maxLength30 = maxLengthCreater(30);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={"Enter your message"} validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"}) (AddMessageForm);





export default Dialogs;