import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initStore from './redux/store';
// import { Provider } from 'react-redux';
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets//css/bootstrap.min.css';
import './assets/css/index.css';
import './assets/css/responsive.css';


const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
if (process.env.NODE_ENV !== 'production') { 
    reportWebVitals(console.log);
}
