import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

export const PopupSetup = (props: any) => {

    const [container, setContainer] = useState(null);
    const newWindow : any= useRef(window);

    useEffect(() => {
        const div: any = document.createElement("div");
        setContainer(div);
    }, []);

    useEffect(() => {
        if (container) {

            newWindow.current = window.open(
                "",
                "",
                "width=600,height=400,left=200,top=200"
            );
            newWindow.current.document.body.appendChild(container);
            const curWindow = newWindow.current;
            return () => curWindow.close();
        }
    }, [container]);

    return container && createPortal(props.children, container);
};
export default PopupSetup