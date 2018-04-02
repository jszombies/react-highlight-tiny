import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Items from '../src/index';
import theme from './theme.css';
import './index.html';
import array from '../mocks/array.json';

class App extends PureComponent {
  state = {
    query: '',
  };

  render() {
    return (
      <div>
        <h1>Demo App</h1>
        <input
          placeholder="Enter query"
          onChange={e => this.setState({ query: e.target.value })}
        />
        <Items
          items={array}
          query={this.state.query}
          theme={theme}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
