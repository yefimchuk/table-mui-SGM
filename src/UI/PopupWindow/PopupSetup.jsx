import React from "react";
import NewWindow from "react-new-window";
import PopupTable from "./PopupTable";

const Demo = () => {
  return (
    <div>
      <NewWindow
        title="popup"
        features={{
          outerHeight: "100%",
          outerWidth: "100%",
        }}
      >
        <PopupTable />
      </NewWindow>
    </div>
  );
};

export default Demo;
