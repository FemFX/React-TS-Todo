import React from 'react';

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        React Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Todos</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
