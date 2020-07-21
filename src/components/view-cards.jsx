import React from 'react';
import Modal from 'react-bootstrap/Modal';
import UpdateCard from './update-card';
import { CSSTransitionGroup } from 'react-transition-group';

class ViewCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false, currentIndex: null, update: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSaveUpdate = this.handleSaveUpdate.bind(this);
  }

  handleClose() {
    if (event.target.className === 'delete') {
      this.props.deleteCard(this.state.currentIndex)
    }

    this.setState({ show: false, currentIndex: null })
  };

  handleShow() {
    this.setState({ show: true, currentIndex: parseInt(event.target.id) })
  };

  handleUpdate() {
    this.setState({ update: true, currentIndex: parseInt(event.target.id) })
  };

  handleSaveUpdate() {
    this.setState({ update: false })
  }

  render() {
    const cards = this.props.array.map((card, index) => {
      return (
        <div className="col-md-4 py-2" key={index} >
          <div className="card h-100">
            <div className="card-header"><b>Question:</b> <br></br> {card.question}</div>
            <div className="card card-body">
              <h5 className="card-title">Answer</h5>
              <p className="card-text">{card.answer}</p>
            </div>
            <div className="card-footer text-muted">
              <button id={index} variant="primary" onClick={this.handleShow} style={{ border: 'none' }}>
                <svg id={index} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path id={index} d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path id={index} fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
              </button>
              <button id={index} variant="primary" onClick={this.handleUpdate} style={{ border: 'none' }}>
                <svg id={index} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path id={index} d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path id={index} fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    });
    if (!this.state.update) {
      return (
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <div>
            <h1 className="text-center">My Cards</h1>
            <div className="container">
              <div className="row">
                {cards}
              </div>
            </div>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              // backdrop="static"
              keyboard={false}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this card?</Modal.Title>
              </Modal.Header>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={this.handleClose}>
                  Close
          </button>
                <button className='delete' variant="primary" onClick={this.handleClose}>
                  Delete
          </button>
              </Modal.Footer>
            </Modal>
          </div>
        </CSSTransitionGroup>

      );
    } else {
      return (
        < UpdateCard content={this.props.array[this.state.currentIndex]} currentIndex={this.state.currentIndex} setView={this.props.setView} saveUpdate={this.handleSaveUpdate} updateCard={this.props.updateCard} array={this.props.array} />
      )
    }

  }
}

export default ViewCards;
