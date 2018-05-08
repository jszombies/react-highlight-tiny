import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Items from 'react-highlight-tiny-list';
import array from '../mocks/array.json';
import tree from '../mocks/tree.json';
import theme from './theme.css';
import './index.html';

class App extends PureComponent {
  state = {
    query: '',
  };

  render() {
    return (
      <div>
        <h1 style={{ color: '#444' }}>React Highlight Tiny</h1>
        <input
          style={{
            display: 'block',
            lineHeight: '26px',
            width: '300px',
            outline: 'none',
            fontSize: '16px',
            margin: '10px auto',
            padding: '0 7px',
          }}
          placeholder="Search"
          onChange={e => this.setState({ query: e.target.value })}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%', paddingRight: '10px' }}>
            <Items
              items={array}
              query={this.state.query}
              theme={theme}
              nothingView="Nothing to show"
            />
          </div>
          <div style={{ width: '50%' }}>
            <Items
              items={tree}
              query={this.state.query}
              theme={theme}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
