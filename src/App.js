import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import MainPage from './components/MainPage';
import UploadForm from './components/UploadForm';

function getFaviconEl() {
  return document.getElementById("favicon");
}

function App() {

    const favicon = getFaviconEl(); // Accessing favicon element
    favicon.href = "https://img.icons8.com/fluent/48/4a90e2/image.png";
   
  document.title = `Mirage Galley`;
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
        <Route exact path="/">
        <MainPage />
        </Route>
        <Route path="/uploadForm">
          <UploadForm />
          <MainPage/>
        </Route>
        </Switch>
      
      </Router>
 
    </div>
  );
}

export default App;
