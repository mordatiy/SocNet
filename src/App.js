// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    //console.log('App')
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes basename="/">
                    <Route path="/" element={<ProfileContainer />} />
                    <Route path="/profile/:userId?/*" element={<ProfileContainer  />} />
                    <Route path="/dialogs/*" element={<DialogsContainer  />} />
                    <Route path="/messages/" element={<Messages />} />
                    <Route path="/users/" element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
