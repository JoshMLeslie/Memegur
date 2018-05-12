import React from 'react';

export default class UploadModal extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e) {
      e.preventDefault();
      const user = merge({},this.state);
      this.props.processForm(user);
    }

    render () {
      return (
asd
      );
    }


}
