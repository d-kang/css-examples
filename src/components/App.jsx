import React, { PureComponent } from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Challenge1 from './Challenge1';
import AddToCart from './AddToCart';
import Signup from './Signup';
import Phone from './Phone';
import ColorVariables from './ColorVariables';
import ThemedSite from './ThemedSite';
import VariableBooth from './VariableBooth';

class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <Card /> */}
        {/* <Challenge1 /> */}
        {/* <AddToCart /> */}
        {/* <Signup /> */}
        {/* <Phone /> */}
        {/* <ColorVariables /> */}
        {/* <ThemedSite /> */}
        <VariableBooth />
      </div>
    );
  }
}

export default App;
