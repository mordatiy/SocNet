import React, { Suspense, lazy } from "react";

import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate, useParams, HashRouter} from "react-router-dom";


import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux-store";


// import Messages from "./Components/Messages/Messages";
// import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {withSuspense} from "./hoc/withSuspense";

import LoginContainer from "./Components/Login/Login";
// import LoginContainer from "./Components/Login/Login";

//import ProfileContainer from "./Components/Profile/ProfileContainer";
//const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));

// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// const DialogsContainer = withSuspense(React.lazy(() => import('./Components/Dialogs/DialogsContainer')));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

// import Messages from "./Components/Messages/Messages";
//const Messages = React.lazy(() => import('./Components/Messages/Messages'));
const Messages = withSuspense(React.lazy(() => import('./Components/Messages/Messages')));

// import UsersContainer from "./Components/Users/UsersContainer";
// const UsersContainer = lazy(() => import('./Components/Users/UsersContainer'));
const UsersContainer = withSuspense(lazy(() => import('./Components/Users/UsersContainer')));


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
                        <Route path="/" element={<Suspense fallback={<Preloader />}><ProfileContainer/></Suspense>}/>
                        <Route path="/profile/:userId?/*" element={<Suspense fallback={<Preloader />}><ProfileContainer/></Suspense>}/>
                        <Route path="/dialogs" element={<Suspense fallback={<Preloader />}><DialogsContainer/></Suspense>}/>
                        {/* use withSuspense HOC: */}
                        <Route path="/messages/" element={<Messages />} />
                        <Route path="/users/" element={<UsersContainer />} />
                        {/*<Route path="/users/" element={<Suspense fallback={<Preloader />}><UsersContainer/></Suspense>}/>*/}
                        {/*end use withSuspense HOC: */}
                        <Route path="/login/" element={<LoginContainer/>}/>
                    </Routes>

                    {/*work1*/}
                    {/*<Routes basename="/">*/}
                    {/*    <Route path="/" element={<ProfileContainer/>}/>*/}
                    {/*    <Route path="/profile/:userId?/*" element={<ProfileContainer/>}/>*/}
                    {/*    <Route path="/dialogs/*" element={<DialogsContainer/>}/>*/}
                    {/*    <Route path="/messages/" element={<Messages/>}/>*/}
                    {/*    <Route path="/users/" element={<UsersContainer/>}/>*/}
                    {/*    <Route path="/login/" element={<LoginContainer/>}/>*/}
                    {/*</Routes>*/}
                    {/*work1*/}
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

export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

export const SocialNetworkApp = (props) => {
    //console.log("socialNetworkApp with BrowserRouter & Provider");
    return (
        //1
        // <BrowserRouter basename={"/"}>
        //     <Provider store={store}>
        //         <AppContainer/>
        //     </Provider>
        // </BrowserRouter>

        // 2
        // <HashRouter>
        //     <Provider store={store}>
        //         <AppContainer/>
        //     </Provider>
        // </HashRouter>

        //work1
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
        //work1
    )
}

// export default SocialNetworkApp();

