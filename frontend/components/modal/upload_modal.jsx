import React from 'react';

export default class UploadModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: ".",
      body: ".",
      url: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.goToPost = this.goToPost.bind(this);
  }

  update(field) {
    return (
      (e) => this.setState({ [field]: e.target.value })
    );
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return(
        this.setState({ imageFile: file, imageUrl: fileReader.result })
      );
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.imageFile || this.state.url.length > 0) {
      let formData = new FormData();
      formData.append("post[title]", this.state.title);
      formData.append("post[body]", this.state.body);
      formData.append("post[image]", this.state.imageFile || this.state.url);

      this.props.processForm(formData).then(this.goToPost);
    } else {
      return window.alert("you need an image or image url");
    }
  }

  goToPost(data) {
    // using Object.keys is fine 'cause it's only ever one post returning at a time from 'create'
    this.props.closeModal();
    const postId = Object.keys(data.payload.post);
    this.props.history.push(`/gallery/${postId}`);
  }

  render () {
    return (
      <div id="upload-modal">
        <label>Upload a post!</label>

          <input
            maxLength={140}
            placeholder={"title"}
            type="text"
            onChange={this.update("title")} />

          <textarea
            maxLength={255}
            placeholder={"body"}
            onChange={this.update("body")} />

        <input type="file" onChange={this.updateFile} />
        <label>or</label>
        <input
          placeholder={"url"}
          type="text"
          onChange={this.update("url")} />

        <button
          disabled={
            (this.state.url.length === 0 ^
            this.state.imageFile === null) === 0
          }
          onClick={this.handleSubmit}> Make post!
        </button>

        <img
          className={this.state.imageUrl ? "" : "hidden"}
          src={this.state.imageUrl} />
      </div>
    );
  }
}
