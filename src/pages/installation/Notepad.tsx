import React from "react";
import "./Notepad.css";

interface Row {
  id: number;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
}

const Notepad = () => {
  const [rows, setRows] = React.useState<Row[]>([
    { id: 1, column1: "", column2: "", column3: "", column4: "" },
    { id: 2, column1: "", column2: "", column3: "", column4: "" },
    { id: 3, column1: "", column2: "", column3: "", column4: "" }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const newRows = [...rows];
    newRows[idx] = { ...newRows[idx], [e.target.name]: e.target.value };
    setRows(newRows);
  };

  return (
    <div className="notepad">
      <table>
        <thead>
          <tr className="heading">
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  name="column1"
                  value={row.column1}
                  onChange={e => handleChange(e, idx)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="column2"
                  value={row.column2}
                  onChange={e => handleChange(e, idx)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="column3"
                  value={row.column3}
                  onChange={e => handleChange(e, idx)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="column4"
                  value={row.column4}
                  onChange={e => handleChange(e, idx)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notepad;
