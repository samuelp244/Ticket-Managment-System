import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import LogInComm from './components/forms/CustomerForms/LogInComm';
import SignUpComm from './components/forms/CustomerForms/SignUpComm';

import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/signupc" element={<SignUpComm/>}></Route>
          <Route path="/loginc" element={<LogInComm/>}></Route>
        </Routes>
      </Router>
      {/* <MainPage/>
      <SignUpComm/>
      <Footer/> */}
    </div>
  );
}

export default App;
