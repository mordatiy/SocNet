import React, { Suspense } from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate, useParams} from "react-router-dom";


import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux-store";


// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import Messages from "./Components/Messages/Messages";
// import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {withSuspense} from "./hoc/withSuspense";
// import LoginContainer from "./Components/Login/Login";


//const Messages = React.lazy(() => import('./Components/Messages/Messages'));
// const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const DialogsContainer = withSuspense(React.lazy(() => import('./Components/Dialogs/DialogsContainer')));
const Messages = withSuspense(React.lazy(() => import('./Components/Messages/Messages')));

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./Components/Login/Login'));



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
                        <Route path="/dialogs/*" element={<DialogsContainer/>} />
                        <Route path="/messages/" element={<Messages />} />
                        <Route path="/users/" element={<Suspense fallback={<Preloader />}><UsersContainer/></Suspense>}/>

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

export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

export const SocialNetworkApp = (props) => {
    //console.log("socialNetworkApp with BrowserRouter & Provider");
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

// export default SocialNetworkApp();

