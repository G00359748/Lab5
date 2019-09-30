import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/read/">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/">Pricing</Nav.Link>
    </Nav>
  </Navbar>

  <Switch>
  <Route exact path="/" component={Content}/>
  <Route path="/read" component={Read}/>
  <Route path="/create" component={Create}/>
</Switch>


     {/* <Header></Header>
         <h1>Hello World</h1>
          <h2>It is {new Date().toLocaleTimeString()}</h2> 
          <br></br>
          <Footer></Footer>
     <Content></Content> */}
          

    </div>
    </Router>
  );
}
}

export default App;
