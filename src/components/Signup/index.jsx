import React from 'react';
import './Signup.scss';

const Signup = () => (
  <div className="signup__container">
    <main>
      <section className="testimonial">
        <img
          src="https://avatars1.githubusercontent.com/u/24846289?s=460&v=4"
          alt=""
        />
        <h3>David Kang</h3>
        <p>
          I have worked with Startup X product, and I think it is fabulous. I
          highly recommend the use of this product. It is simply a life saver.
        </p>
      </section>
      <form className="signup-form">
        <h3>Signup Form</h3>
        <input type="email" name="email" placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
        <input type="checkbox" name="agreement" />
        <span>I Agree with the terms of service</span>

        <button type="submit">signup</button>
      </form>
    </main>
  </div>
);

export default Signup;
