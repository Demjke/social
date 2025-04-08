import { reduxForm, reset as resetForm } from "redux-form";
import { maxLengthCreator, requared } from "../../../utils/validators";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

const maxLength50 = maxLengthCreator(50);

const Messages = ({ dialogsPage, sendMessage }) => {
    let dialogs = dialogsPage.dialogs.map(item => <Dialog key={item.id} name={item.name} id={item.id} />);
    let messages = dialogsPage.messages.map(item => <Message key={item.id} message={item.message} id={item.id} />);

    let addNewMessage = (values, dispatch) => {
        sendMessage(values.newMessageBody);
        dispatch(resetForm("dialogAddMessageForm"));
    };

    return (
        <div className={classes.dialogs}>
            <h1 className={classes.title}>Messages</h1>
            <div className={classes["dialogs-wrapper"]}>
                <div className={classes["dialogs-items"]}>{dialogs}</div>
                <div className={classes["dialogs-messages"]}>
                    {messages}
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form className={classes.form} action="/" onSubmit={handleSubmit}>
            {createField("Enter your text", classes.field, "newMessageBody", [requared, maxLength50], Textarea)}
            <button className={classes.btn} type="submit">
                Add message
            </button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Messages;
