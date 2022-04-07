import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import MyProfile from './Pages/MyProfile';
import Dashboard from './Pages/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/my-profile" exact element={<MyProfile />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
