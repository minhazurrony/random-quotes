import React, { Component } from 'react';
import Quotes from './components/Quotes';
import Button from './components/Button';

const API =
  'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

class App extends Component {
  state = {
    quote: '',
    author: ''
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data =>
        this.setState({ quote: data.quoteText, author: data.quoteAuthor })
      );
  }
  render() {
    return (
      <div>
        <Quotes quote={this.state.quote} author={this.state.author} />
        <Button />
      </div>
    );
  }
}

export default App;
