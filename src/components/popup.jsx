import React from "react";
import Modal from "react-modal";
import ModalButton from "./modalbutton";
import style from "./style.css";

class PopUp extends React.Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div className="modalWrapper">
        <ModalButton handleClick={this.toggleModal}>login</ModalButton>
        <Modal
          className="base"
          overlayClassName="overlay"
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          //contentLabel="Modal with image"
        >
          <a href="#" className="text">
            login as a worker
          </a>
          <a href="#" className="text">
            login as an employer
          </a>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
