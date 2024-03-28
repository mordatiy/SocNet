import React, {Component, Suspense} from "react";
import Preloader from "../Components/common/Preloader/Preloader";

export const withSuspense = (Component) => {
    return (props) => <Suspense fallback={<Preloader />}><Component {...props} /></Suspense>;
}