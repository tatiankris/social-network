import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators/validators";
import cs from "../../common-styles/BlockCommonStyles.module.scss";


export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
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

const Dialogs = React.memo(({dialogsPage, isAuth, sendMessageAC, ...props}: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = dialogsPage.messages.map( m => <Message message={m.message}/> )


    let addNewMessage = (values: MessageFormDataType) => {
        sendMessageAC(values.newMessageBody);
        values.newMessageBody = " ";

    }
    return (
        <div className={`${s.dialogs} ${cs.block}`}>
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
})

type MessageFormDataType = {
    newMessageBody: string
}
const maxLength30 = maxLengthCreater(30);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = React.memo((props) => {
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
})

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"}) (AddMessageForm);





export default Dialogs;