import { BrowserRouter, Routes, Route } from "react-router-dom";
// import react from 'react';
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header";


export default function App() {
  return(
<BrowserRouter>
<Header/>
  <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
         <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
  </Routes>
</BrowserRouter>
  )
}
