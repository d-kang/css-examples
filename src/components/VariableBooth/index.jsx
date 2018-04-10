import React from 'react';
import './VariableBooth.scss';

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

class VariableBooth extends React.PureComponent {
  state = {
    sliderVal: '0',
    boxes: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
    },
  };

  handleInput = e => {
    e.target.value;
    console.log('e.target.value', e.target.id);
    this.setState({
      boxes: { ...this.state.boxes, [e.target.id]: e.target.value },
    });
  };
  handleSlider = e => {
    this.setState({ sliderVal: e.target.value });
  };
  render() {
    const { sliderVal } = this.state;

    return (
      <div className="booth__container" style={{ '--slider': sliderVal }}>
        <main className="booth">
          <aside className="slider">
            <label>Move this 👇 </label>
            <input
              className="booth-slider"
              type="range"
              min="-50"
              max="50"
              value={sliderVal}
              step="5"
              onChange={this.handleSlider}
            />
          </aside>

          <section className="color-boxes">
            {[1, 2, 3, 4, 5, 6].map((num, i) => (
              <div
                key={i}
                className="color-box"
                style={{ [`--bg-${num}`]: this.state.boxes[num] }}
              >
                <input onChange={this.handleInput} id={num} />
              </div>
            ))}

            {/* <div className="color-box" id="1">
              <input />
            </div> */}
          </section>

          <footer className="instructions">
            👉🏻 Move the slider<br />
            👉🏻 Write any color in the red boxes
          </footer>
        </main>
      </div>
    );
  }
}

export default VariableBooth;
