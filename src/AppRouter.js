// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import StockGraph from './components/StockGraph';

const AppRouter = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Stock Scanner
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stock-graph">
              Stock Graph
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stock-graph" component={StockGraph} />
    </Switch>
  </Router>
);

export default AppRouter;
