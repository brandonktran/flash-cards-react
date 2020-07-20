import React from 'react';

class UpdateCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      question: this.props.content.question,
      answer: this.props.content.answer,
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
    this.props.updateCard(this.props.currentIndex, newCard);
    this.setState({
      question: '',
      answer: ''
    }, this.handleReset);
  }

  handleReset() {
    this.props.saveUpdate()
    this.setState({
      question: '',
      answer: ''
    });
  }



  render() {
    return (
      <div>
        <h1 className="text-center">Update Cards</h1>
        <div className="container">
          <form className="text-center" onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <div className="form-group">
              <label className="mr-2">Question</label> <br></br>
              <textarea type="textarea" onChange={this.handleChange} name="question" value={this.state.question}></textarea>
            </div>
            <div className="form-group">
              <label className="mr-2">Answer</label> <br></br>
              <textarea type="text" onChange={this.handleChange} name="answer" value={this.state.answer}></textarea>
            </div>
            <div>
              <button type="reset" className="btn btn-danger m-1">Cancel</button>
              <button type="submit" className="btn btn-success m-1">Save Card</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UpdateCard;
