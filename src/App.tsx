import React from "react";
import "./App.css";
import BasicTable from "./UI/Table/Table";

function App() {
    let a = [1, 4, 6, 7, 8, 96, 4, 7]
    return (
        <>
            <BasicTable/>
            {a.map((key: any) => {
                console.log(key)
            })}
        </>
    );
}

export default App;
