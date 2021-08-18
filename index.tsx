import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStore } from './store/store';
import './styles/globalStylesheet.scss';
//https://github.com/amiroff157/movie-lab

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
      <BrowserRouter basename={process.env.PUBLIC_URL} />
    </GlobalStore>
    <h1>Hello World</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
