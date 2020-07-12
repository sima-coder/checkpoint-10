import React from 'react';
import { Link, Route, Switch, Redirect} from 'react-router-dom';
import { fakeAuth } from './components/Login';

// import Home from './components/Home';
// import Category from './components/Category';
// import Products from './components/Products';
// import Admin from './components/Admin';
import {Home, Category, Products, Login, Admin} from './components';




function App() {
  return (
    <div style={{fontFamily:"Times News Roman", marginLeft:"10px"}}>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};


export default App;
