import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './TextBox.css';

type Props = {};

const AnalyticsPage = (props: Props) => {
  return (
    <div>
      {/* <FormControl variant="outlined" fullWidth style={{ width: '40%' }}>
        <InputLabel id="select-category-label">Select category</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          label="Select category"
        >
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </Select>
      </FormControl> */}
      <div className="outer-box">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Question"
          fullWidth
          style={{ height: 40 }}
        />
        <div style={{ position: "relative" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Write your answer here"
            fullWidth
            multiline
            rows={8}
            style={{ height: 200, marginTop: 20 }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 20,
            backgroundColor: "orange"
          }} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
