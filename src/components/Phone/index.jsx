import React from 'react';
import './Phone.scss';

const Phone = ({ isDark }) =>
  isDark ? (
    <div className="phone__container">
      <section className="phone-body">
        <div className="phone-inner">
          <article>C S S 🤯 R O C K S</article>
        </div>
      </section>
    </div>
  ) : (
    <div className="phone__container">
      <section className="phone-body light">
        <div className="phone-inner light">
          <article>C S S 🤯 R O C K S</article>
        </div>
      </section>
    </div>
  );

class PhoneContainer extends React.PureComponent {
  state = {
    isDark: true,
  };

  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
    console.log('!this.state.isDark', !this.state.isDark);
  };

  render() {
    const { isDark } = this.state;
    return (
      <div>
        <button onClick={this.changeTheme}>
          {isDark ? 'Light Theme' : 'Dark Theme'}
        </button>
        <Phone isDark={isDark} />
      </div>
    );
  }
}

export default PhoneContainer;
