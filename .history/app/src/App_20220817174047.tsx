import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import SignUpComm from './components/forms/SignUpComm';

import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      {/* <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/signup" element={<SignUpComm/>}></Route>
        </Routes>
      </Router> */}
      <MainPage/>
      <SignUpComm
      <Footer/>
    </div>
  );
}

export default App;
