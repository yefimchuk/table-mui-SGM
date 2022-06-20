import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import store from "./BLL/store";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
