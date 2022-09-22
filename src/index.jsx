import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Registration from './components/Registration/index';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Registration</h1>
      </header>
      <main>
        <Registration />
      </main>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
