import React from 'react';
import axios from 'axios';
import QuoteCards from './composant/QuoteCard'
import './App.css';

const sampleQuote = [
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuote[0]
    };
    this.getQuote = this.getQuote.bind(this);
  }
      
  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteCards quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;