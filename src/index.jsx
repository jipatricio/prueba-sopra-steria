import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RoutesApp from './routes/RoutesApp';
import storeFn from './store';
import { TitleStyled } from './componentsStyled/TitleStyledComponent';
import { PRUEBA_SOPRA_STERIA } from './text/textApp';

const store = storeFn();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="background-image">
          <TitleStyled>{PRUEBA_SOPRA_STERIA}</TitleStyled>
          <RoutesApp />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
