import React from "react";
import Modal from "react-modal";
import ModalButton from "./modalbutton";
import style from "./style.css";

class PopUp1 extends React.Component {
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
        <ModalButton handleClick={this.toggleModal}>sign up</ModalButton>
        <Modal
          className="base"
          overlayClassName="overlay"
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          //contentLabel="Modal with image"
        >
          <a href="#" className="text">
            sign up as a worker
          </a>
          <a href="#" className="text">
            sign up as an employer
          </a>
        </Modal>
      </div>
    );
  }
}

export default PopUp1;
