import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes></Routes>
      </Router>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
