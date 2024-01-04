import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './Components/Profile';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }else{
        //logged out 
        dispatch(logout());
      }
    })

    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        ) }
        
      </Router>
    </div>
  );
}

export default App;
