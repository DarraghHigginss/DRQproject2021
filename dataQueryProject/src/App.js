import React from 'react';
import './App.css';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import addShow from './components/addShow';
import hot from './components/hot';
import Edit from './components/edit';
import Logo from './logo1.jpg';
import action from './components/action';
import comedy from './components/comedy';
import drama from './components/drama';
import all from './components/all';


class App extends React.Component {
//Navigation Bar , links to the various componenets/pages , dropdown for the genres of series
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">GuideCentral</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
        <Nav.Link href="/hot">What's New</Nav.Link>
        <Nav.Link href="/add">Add a Tv show</Nav.Link>
        <NavDropdown title="Genres" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/action">Action</NavDropdown.Item>
          <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="/drama">Drama</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/all">All</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

<Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={addShow} />
            <Route path="/hot" component={hot} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/action" component={action} />
            <Route path="/comedy" component={comedy} />
            <Route path="/drama" component={drama} />
            <Route path="/all" component={all} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
