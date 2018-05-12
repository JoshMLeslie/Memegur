import React from 'react';
import UploadModal from './upload_modal_container';

export default class Modal extends React.Component {

  render () {
    const modal = this.props.modal;
    if (!modal) return null;

    let chosen_modal = null;
    switch(modal) {
      case 'upload':
        chosen_modal = <UploadModal />;
        break;
      default:
        return chosen_modal;
    }

    return (
      <div
        className="modal-bg"
        onClick={this.props.closeModal}>

        <div
          id="upload-modal"
          onClick={ e => e.stopPropagation()}>

          {chosen_modal}
        </div>
      </div>
    );
  }
}
