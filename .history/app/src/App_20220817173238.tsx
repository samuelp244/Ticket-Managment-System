import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          R
        </Routes>
      </Router>
    </div>
  );
}

export default App;
