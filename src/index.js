import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/index';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/fontStyles.css';
import './assets/styles/customStyles.scss';
import './assets/styles/utilityStyles.scss';
import './assets/styles/tailwind.css';
import close from './assets/icons/close.svg';

const CloseButton = ({ closeToast }) => (
  <div onClick={closeToast}>
    <img src={close} alt="" />
  </div>
);

ReactDOM.render(
  <div>
    <Router>
      <Routes />
    </Router>
    <ToastContainer closeButton={CloseButton} />
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
