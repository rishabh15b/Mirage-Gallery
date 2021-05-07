import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';


function App() {
  document.title=`Mirage Galley`;
  return (
    <div className="App">
      <Header/>
      <MainPage />
    </div>
  );
}

export default App;
