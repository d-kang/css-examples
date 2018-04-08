import React from 'react';
import './Card.scss';

const Card = () => (
  <div className="cards">
    <section className="card">
      <header />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button>button</button>
    </section>
    <section className="card card--big">
      <header />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button>button</button>
    </section>
    <section className="card">
      <header />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button>button</button>
    </section>
  </div>
);

export default Card;
