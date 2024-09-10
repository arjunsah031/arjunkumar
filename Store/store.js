"use client";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux"

import AddtoCartReducer from "./Reducers/AddtoCart/AddtoCart";
import BuyNowProductReducer from "./Reducers/TxnDetails/BuyNowProduct";
import LoginsignupBoxReducer from "./Reducers/LoginSignupBox/LoginSignupBox";
import OpenCloseSideNavigationReaducer from "./Reducers/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";

export default function Reduxstore({children}) {

    const Reducer = combineReducers( {

        AddtoCartReducer : AddtoCartReducer,
        BuyNowProductReducer : BuyNowProductReducer,
        LoginsignupBox : LoginsignupBoxReducer,
        OpenCloseSideNavigation: OpenCloseSideNavigationReaducer,

    })

    const store = createStore(Reducer);

    return <Provider store={store}>

        {children}

    </Provider>
}