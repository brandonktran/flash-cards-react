import React from 'react';
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [{ question: 'What is React?', answer: 'A JavaScript Framework.' }, { question: 'What is Node?', answer: 'A runtime environment that executed JS outside a browser.' }]
    }
    if (JSON.parse(localStorage['flash-cards']).length > 0) {
      this.state.cards = JSON.parse(localStorage.getItem('flash-cards'))
    }
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  setView(current) {
    this.setState({ view: current });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards array={this.state.cards} />;
      case 'view-cards':
        return <ViewCards array={this.state.cards} deleteCard={this.deleteCard} updateCard={this.updateCard} setView={this.setView} />;
      default:
        return null;
    }
  }

  saveCards() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
  }

  addCard(card) {
    this.setState(prevState => {
      const newArray = [...prevState.cards];
      newArray.push(card);
      return (
        { cards: newArray }
      )
    }, this.saveCards)
  }

  deleteCard(id) {
    this.setState(prevState => {
      const newArray = prevState.cards.filter((card, index) => {
        if (index !== id) {
          return card;
        }
      });
      return (
        { cards: newArray }
      )
    }, this.saveCards)
  }

  updateCard(id, content) {
    this.setState(prevState => {
      const newArray = prevState.cards.map((card, index) => {
        if (index === id) {
          return content;
        } else {
          return card
        }
      });
      return (
        { cards: newArray }
      )
    }, this.saveCards)
  }



  render() {
    console.log('Cards from app', this.state.cards)
    return (
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    );
  }
}
export default App;
