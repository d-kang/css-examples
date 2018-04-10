import React, { PureComponent } from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Challenge1 from './Challenge1';
import AddToCart from './AddToCart';
import Signup from './Signup';
import Phone from './Phone';

class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <Card /> */}
        {/* <Challenge1 /> */}
        {/* <AddToCart /> */}
        {/* <Signup /> */}
        <Phone />
      </div>
    );
  }
}

export default App;
