import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import TopHeadlines from "./components/seperateTop";

function App() {

  const [input, setInput] = useState("")
  const [finalInput, setFinalInput] = useState("")
  const [data,setData] = useState([])
  const inputHandler = (event) => {
    const {name, value} = event.target;
    setInput(value)
  }
  const clickHandler = (event) => {
    event.preventDefault(); 
    Axios.get(`https://newsapi.org/v2/top-headlines?category=${input}&apiKey=208fb2bcea114daa9a25c3717de19657`).then( (e) => {
     setData(e.data.articles);
      
      console.log(e.data.articles);
    })
  }
  


  return (
    
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">React news app</a>
          <form className="form-inline">
            <input value={input} name="query" onChange={inputHandler} className="form-control mr-sm-2" type="search" placeholder="Enter the category" aria-label="Search" />
            <button onClick={clickHandler} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <TopHeadlines title={input} news={data} />
      </div>
      
    
  );
}

export default App;









{/* <Route render={({ history}) => (
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
          <Route path="/Trump" component={ TopHeadlinesT } /> */}