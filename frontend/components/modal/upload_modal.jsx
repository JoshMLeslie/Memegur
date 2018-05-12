import React from 'react';

export default class UploadModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      body: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody (e) {
    this.setState({
      body: e.target.value
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => (
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    ).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = newFormData();
    formData.append("post[body]", this.state.body);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    this.props.processForm(post);
  }

  render () {

    return (
      <div>
        Modal Test
      </div>
    );
  }


}
