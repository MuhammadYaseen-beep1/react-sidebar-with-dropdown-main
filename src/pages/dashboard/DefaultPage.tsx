import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "./TextBox.css";

type Props = {};

const DefaultPage = (props: Props) => {
  return (
    <>
      <div className="outer-box">
        <h3 className="heading">Create Category</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      <div className="outer-box">
        <h3 className="heading">Create Category</h3>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      <div className="text-right">
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-orange"
          style={{ marginLeft: 10 }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default DefaultPage;

// function TextBox() {
//   return (
//   );
// }

// export default TextBox;
