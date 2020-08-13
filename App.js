import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Topheadlines from "./components/TopheadlinesUs"
import TopHeadlinesBBC from './components/TopHeadlinesBBC';
import TopHeadlinesG from './components/TopHeadlinesGermany';
import TopHeadlinesT from './components/TopHeadlinesTrumph';

function App() {

 
  

  return (
    <BrowserRouter>
      <div className="container">
      <nav class="navbar navbar-light bg-light">
        <a className="navbar-brand">React news app</a>
        <Route render={({ history}) => (
          <a onClick={() => { 
            let path = history.location.pathname;
            if( path=="/Germany" ){
              history.push("/Trump"); 
            }else if( path == "/Trump" ){
              history.push("/"); 
            }else if( path == "/" ){
              history.push("/BBC"); 
            }else{
              history.push("/Germany"); 
            }
           

          }} class="btn btn-outline-success">Change</a>
        )} />
      </nav>
     
          <Route path="/" exact component={ Topheadlines } />
          <Route path="/BBC" component={ TopHeadlinesBBC } />
          <Route path="/Germany" component={ TopHeadlinesG } />
          <Route path="/Trump" component={ TopHeadlinesT } />
      </div>
    </BrowserRouter>
  );
}

export default App;
