import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import LoginContainer from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {}

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                {/*<Header />*/}

                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes basename="/">
                        <Route path="/" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId?/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/messages/" element={<Messages/>}/>
                        <Route path="/users/" element={<UsersContainer/>}/>
                        <Route path="/login/" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userID,
    isAuth: state.auth.isAuth,
});



export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
