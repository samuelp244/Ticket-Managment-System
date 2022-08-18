import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
