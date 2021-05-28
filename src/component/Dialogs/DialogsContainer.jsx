
import { connect } from 'react-redux';
import { compose } from 'redux';
import { SendMessageCreate, updateSendMessageCreate } from '../../Redux/dialogReducer';
import { withAuthRederect } from '../HOK/withAuthRederect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    DialogPage: state.DialogPage,
  }
}
let mapDicpatchToProps = (dispatch) => {

  return {
    Update_Body: (body) => { dispatch(updateSendMessageCreate(body)) },
    SendMassage: (NewMessageBody) => { dispatch(SendMessageCreate(NewMessageBody)) }
  }
}

export default compose(
  connect(mapStateToProps, mapDicpatchToProps),
  withAuthRederect
)(Dialogs);