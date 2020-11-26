import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      tags: [],
      url: "",
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  addLink = () => {
    this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    this.setState({
      modal: false,
      name: "",
      tags: [],
      url: "",
    });
  };

  addTag = () => {
    this.setState({
      tags: this.state.tags.concat([{ name: "" }]),
    });
  };

  onTagChange = (i, e) => {
    const tags = this.state.tags.slice();
    tags[i] = {
      name: e.currentTarget.value,
    };
    this.setState({
      tags: tags,
    });
  };

  onNameChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };
  onURLChange = (e) => {
    this.setState({
      url: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          {" "}
          Add Link{" "}
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Add Link Form</ModalHeader>
          <ModalBody>
            <label>Name:</label>
            <br />
            <input
              type="text"
              onChange={this.onNameChange}
              value={this.state.name}
            />
            <br />
            <label>URL:</label>
            <br />
            <input
              type="text"
              onChange={this.onURLChange}
              value={this.state.URL}
            />
            <br />
            <label>Tags:</label>
            <br />
            {this.state.tags.map((tag, i) => {
              return (
                <input
                  key={i}
                  type="text"
                  onChange={this.onTagChange.bind(this, i)}
                  value={tag.name}
                />
              );
            })}

            <br />
            <Button color="secondary" onClick={this.addTag}>
              Add Tag
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addLink}>
              Submit
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
