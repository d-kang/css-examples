import React, { PureComponent } from 'react';
import NavBar from './NavBar';
import Card from './Card';

class App extends PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <Card />
      </div>
    );
  }
}

export default App;
