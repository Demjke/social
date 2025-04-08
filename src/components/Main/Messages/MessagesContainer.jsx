import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { addMessageCreator } from "../../../store/dialogs-reducer";
import Messages from "./Messages";

let mapStateToProps = ({ dialogsPage }) => ({ dialogsPage: dialogsPage });

let mapDispatchToProps = dispatch => ({ sendMessage: newMessageBody => dispatch(addMessageCreator(newMessageBody)) });

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Messages);
