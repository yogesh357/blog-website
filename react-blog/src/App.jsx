// import "./App.css"
import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() { 
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login( userData ))// {} is removed

        } else{
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))
  },[])


  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400"> 
      <div className="w-full block">
        <Header />
        <main> 

        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
