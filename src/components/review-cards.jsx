import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false, currentIndex: 0 };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(event) {
    console.log(typeof event.currentTarget.id);
    this.setState({ flip: !this.state.flip, currentIndex: event.currentTarget.id })
  }

  render() {
    const listItems = this.props.array.map((card, index) => {
      if (this.state.flip && index.toString() === this.state.currentIndex) {
        return (
          <Carousel.Item key={index} id={index} onClick={this.flipCard} style={{ backgroundColor: 'rgb(100,100,100)', height: '500px', paddingTop: '220px', color: 'white' }}>
            <h3 style={{ display: 'none' }} className="text-center">{card.question}</h3>
            <h3 style={{ display: 'block' }} className="text-center">{card.answer}</h3>
          </Carousel.Item>
        )
      } else {
        return (
          <Carousel.Item key={index} id={index} onClick={this.flipCard} style={{ backgroundColor: 'black', height: '500px', paddingTop: '220px', color: 'white' }}>
            <h3 style={{ display: 'block' }} className="text-center">{card.question}</h3>
            <h3 style={{ display: 'none' }} className="text-center">{card.answer}</h3>
          </Carousel.Item>
        )
      }

    });

    return (
      <>
        <h1 className="text-center">Review Cards</h1>
        <div className="container">
          <Carousel interval={null}>
            {listItems}
          </Carousel>
        </div>
      </>


    );
  }
}
export default ReviewCards;
