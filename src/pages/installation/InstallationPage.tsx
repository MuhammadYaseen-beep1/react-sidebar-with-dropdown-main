import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./install.css";
import Notepad from "./Notepad";

type Props = {};

const InstallationPage = (props: Props) => {
  // return (
  //   <div>InstallationPage</div>
  // );
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: { target: { value: string } }) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>FAQ's | List Categories</h1>

      <div style={{ display: "flex" }}>
        <TextField
          style={{
            borderRadius: "30px",
            border: "1px solid #333",
            padding: "5px",
            marginRight: "10%",
          }}
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          className="search"
          label="Search"
        />

        <div style={{ display: "flex" }}>
          <button
            style={{ height: "50px", marginRight: "10px" }}
            className="btn btn-orange "
          >
            But1
          </button>
          <button
            style={{ height: "50px", marginRight: "10px" }}
            className="btn btn-orange"
          >
            But2
          </button>
          <button
            style={{ height: "50px", marginRight: "10px" }}
            className="btn btn-orange"
          >
            But3
          </button>
          <button
            style={{ height: "50px", marginRight: "10px" }}
            className="btn btn-orange"
          >
            But4
          </button>
          <button style={{ height: "50px" }} className="btn btn-orange">
            But5
          </button>
        </div>
      </div>

      <div>
        <Notepad />
      </div>

      {/* <List input={inputText} /> */}

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <button className="btn btn-orange" style={{ marginRight: "10px" }}>
          Create New FAQ
        </button>
        <button className="btn btn-orange">Create New Category</button>
      </div>
    </div>
  );
};

export default InstallationPage;
//----------------------------------

// function App() {
// }

// export default App;
