import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import './index.html';

export class App extends PureComponent {
  render() {
    return (
      <h1>Demo App</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
