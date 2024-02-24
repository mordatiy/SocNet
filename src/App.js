import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import LoginContainer from "./Components/Login/Login";

const App = (props) => {
    // console.log('App')
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            {/*<Header />*/}

            <Navbar/>
            <div className="app-wrapper-content">
                <Routes basename="/">
                    <Route path="/" element={<ProfileContainer />} />
                    <Route path="/profile/:userId?/*" element={<ProfileContainer  />} />
                    <Route path="/dialogs/*" element={<DialogsContainer  />} />
                    <Route path="/messages/" element={<Messages />} />
                    <Route path="/users/" element={<UsersContainer />} />
                    <Route path="/login/" element={<LoginContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
