import React, { Component } from 'react';
import Quotes from './components/Quotes';
import SocialButton from './components/SocialButton';
import './App.css';

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

  handleNewQuote = () => {
    fetch(API)
      .then(res => res.json())
      .then(data =>
        this.setState({ quote: data.quoteText, author: data.quoteAuthor })
      );
  };
  render() {
    return (
      <React.Fragment>
        <div className='container main-section'>
          <div className='row'>
            <div className='card'>
              <SocialButton />

              <Quotes quote={this.state.quote} author={this.state.author} />
            </div>

            <button
              onClick={this.handleNewQuote}
              type='button'
              className='btn btn-info'
            >
              New Quote
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
