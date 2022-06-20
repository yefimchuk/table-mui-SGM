import React, {useState, useEffect} from "react";

import NewWindow from "react-new-window";
import PopupTable from "./PopupTable";


const Demo = () => {

    return (
        <div>
            <NewWindow
                title="yolo"
            >
                <PopupTable/>

            </NewWindow>

        </div>

    );
};

export default Demo;
