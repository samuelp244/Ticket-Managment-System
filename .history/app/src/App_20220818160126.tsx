import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Footer from './components/Footer';
import LogIn from './components/forms/CustomerForms/LogInComm';
import SignUp from './components/forms/CustomerForms/SignUpComm';
import LogInOrg from './components/forms/RootUserForms/LogInOrg';
import SignUpOrg from './components/forms/RootUserForms/SignUpOrg';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="/orglogin" element={<LogInOrg/>}></Route>
          <Route path="/orgsignup" element={<SignUpOrg/>}></Route>
          
        </Routes>
      </Router>
      {/* <MainPage/>
      <SignUpComm/>
      <Footer/> */}
    </div>
  );
}

export default App;