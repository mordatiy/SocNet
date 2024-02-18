import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import state, {addPost, subscribe, updateNewPostTxt} from './redux/state'
// import store from './redux/store'
import store from './redux/redux-store'
import App from "./App";
import './index.css';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

    //console.log('rerenderEntireTree')
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        // <React.StrictMode>
        //     <BrowserRouter>
        //         <Provider store={store}>
        //             <App />
        //         </Provider>
        //     </BrowserRouter>
        //
        // </React.StrictMode>
    );
}

rerenderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
