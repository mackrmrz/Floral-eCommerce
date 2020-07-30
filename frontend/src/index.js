import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import reducers from './reducers'
import App from './App';
import ShowProducts from './component/productRunway';
import NavBar from './component/navbar';


import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <App>
            <Switch>
              <Route exact path="/" component={ShowProducts}/>
              <Route path="/navbar" component={NavBar}/>
            </Switch>
          </App>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

