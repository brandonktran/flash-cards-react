import React from 'react';

class ViewCards extends React.Component {

  render() {
    const cards = this.props.array.map((card, index) => {
      return (
        <div className="col mb-3" key={index}>
          <div className="card">
            <div className="card-header">Question: {card.question}</div>
            <div className="card-body">
              <h5 className="card-title">Answer</h5>
              <p className="card-text">{card.answer}</p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h1 className="text-center">My Cards</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3">
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCards;
