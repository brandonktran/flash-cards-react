import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    const newArray = [];
    let listItems2 = [];
    const listItems = this.props.array.forEach((card, index) => {
      newArray.push(card.question);
      newArray.push(card.answer);
    });
    console.log(newArray)

    if (newArray.length > 0) {
      listItems2 = newArray.map((card, index) => {
        return (
          <Carousel.Item key={index} style={{ backgroundColor: 'grey' }}>
            <div className="d-block w-100 text-center">{card}</div>
          </Carousel.Item>
        )
      });
    }

    return (
      <>
        <h1 className="text-center">Review Cards</h1>
        <div className="container">
          <Carousel interval={null}>
            {listItems2}
          </Carousel>
        </div>
      </>


    );
  }
}
export default ReviewCards;
