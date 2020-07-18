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
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(current) {
    this.setState({ view: current })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards array={this.state.cards} />;
      case 'view-cards':
        return <ViewCards array={this.state.cards} />;
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
