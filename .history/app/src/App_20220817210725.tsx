import React from 'react';

import Footer from './components/Footer';
import SignUpComm from './components/forms/SignUpComm';

import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/signup" element={<SignUpComm/>}></Route>
        </Routes>
      </Router>
      {/* <MainPage/>
      <SignUpComm/>
      <Footer/> */}
    </div>
  );
}

export default App;
