import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchPage from './SearchPage';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(<Fragment>
                  <Router history={history}>
                    <Switch>
                      <Route path="/" name="App" component={App}/>
                      <Route path="/SearchPage" name="SearchPage" component={SearchPage}/>
                    </Switch>
                  </Router>
                </Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
