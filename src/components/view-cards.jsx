import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ViewCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false, currentIndex: null };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    if (event.target.className === 'delete') {
      this.props.deleteCard(this.state.currentIndex)
    }

    this.setState({ show: false, currentIndex: null })
  };

  handleShow() {
    console.log(event.target.id)
    this.setState({ show: true, currentIndex: parseInt(event.target.id) })
  };

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
            </div>
          </div>
        </div>
      )
    });
    return (
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
    );
  }
}

export default ViewCards;
