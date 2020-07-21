import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const property = event.target.name;
    this.setState({
      [property]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      question: this.state.question,
      answer: this.state.answer,
    };
    this.props.addCard(newCard);
    this.setState({
      question: '',
      answer: ''
    }, this.handleReset);
  }

  handleReset() {
    this.props.setView('view-cards');
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div>
          <h1 className="text-center">Create New Card</h1>
          <form className="text-center" onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <div className="form-group">
              <label className="mr-2">Question</label> <br></br>
              <textarea type="text" onChange={this.handleChange} name="question"></textarea>
            </div>
            <div className="form-group">
              <label className="mr-2">Answer</label> <br></br>
              <textarea type="text" onChange={this.handleChange} name="answer"></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-success m-1">Add</button>
              <button type="reset" className="btn btn-danger m-1">Cancel</button>
            </div>
          </form>
        </div>
      </CSSTransitionGroup>
    );
  }
}
export default CreateCard;
