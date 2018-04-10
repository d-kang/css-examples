import React from 'react';
import './ThemedSite.scss';

const styles = {
  dark: {
    '--bg': 'black',
    '--bg-text': 'white',
  },
  calm: {
    '--bg': '#B3E5FC',
    '--bg-text': '#37474F',
  },
  light: {
    '--bg': 'white',
    '--bg-text': 'black',
  },
};

class ThemedSite extends React.PureComponent {
  state = {
    currentTheme: 'light',
  };

  handleTheme = e => {
    this.setState({ currentTheme: e.target.value });
  };
  render() {
    return (
      <div
        className="themed-site__container"
        style={styles[this.state.currentTheme]}
      >
        <div className="theme">
          <button value="dark" onClick={this.handleTheme}>
            dark
          </button>
          <button value="calm" onClick={this.handleTheme}>
            calm
          </button>
          <button value="light" onClick={this.handleTheme}>
            light
          </button>
        </div>

        <article>
          <h1>Hello World</h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          v
          <h2>Can the world hear?</h2>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          v
        </article>
      </div>
    );
  }
}

export default ThemedSite;
