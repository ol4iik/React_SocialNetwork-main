import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage, updateMessageText } from '../../Redux/dialogs-reducer';
import { AuthRedirect } from '../common/hoc/AuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messageText: state.dialogs.newMessageText,
        messages: state.dialogs.messages
    }
}

export default compose (
    connect(mapStateToProps, { addMessage, updateMessageText }),
    AuthRedirect
)(Dialogs);