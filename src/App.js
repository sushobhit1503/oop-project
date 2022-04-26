import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import MyProfile from './Pages/MyProfile';
import Dashboard from './Pages/Dashboard';
import Wallet from './Pages/Wallet';
import SavedBooks from './Pages/SavedBooks';
import Requests from './Pages/Requests';
import Admin from './Pages/Admin/Admin';
import Users from './Pages/Admin/Users';
import Transactions from './Pages/Admin/Transactions';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      authentication: false
    }
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userDetails"))
    if (user)
      this.setState({ authentication: true })
    else
      this.setState({ authentication: false })
  }
  render() {
    return (
      <div className="App">
        {this.state.authentication ? <Toolbar /> : null}

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/my-profile" exact element={<MyProfile />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/wallet" exact element={<Wallet />} />
          <Route path="/saved-books" exact element={<SavedBooks />} />
          <Route path="/requests" exact element={<Requests />} />
          <Route path="/admin-panel" exact element={<Admin />} />
          <Route path="/all-users" exact element={<Users />} />
          <Route path="/all-transaction" exact element={<Transactions />} />
        </Routes>
      </div>
    );
  }
}

export default App;
