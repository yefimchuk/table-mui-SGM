import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useFormik } from "formik";
import "antd/dist/antd.css";
// @ts-ignore
import "./popup.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRows } from "../../BLL/Popup/popup.slice";
import { selectPopup } from "../../BLL/Popup/popup.selector";
import { HandleIsOpen } from "../../BLL/Table/table.slice";

let errors: any = {};

let PopupTable = () => {
  let dispatch = useDispatch();
  let { rows } = useSelector(selectPopup);
  let data = moment(new Date()).format("L");
  const formik = useFormik({
    initialValues: {
      value: "",
      date: data,
      user: "phil",
      comment: "",
    },
    validate: (values) => {
      if (!values.value) {
        errors.value = "Required";
      } else {
        if (isNaN(parseInt(values.value))) {
          errors.value = "only numbers";
        } else {
          errors.value = "";
        }
      }
      if (!values.comment) {
        errors.comment = "Required";
      } else {
        errors.comment = "";
      }
      if (!values.user) {
        errors.user = "Required";
      } else {
        errors.user = "";
      }
      if (errors.comment === "" && errors.value === "" && errors.user === "") {
        errors = {};
      }

      return errors;
    },
    onSubmit: (values: any) => {
      dispatch(addRows({ values }));
    },
  });

  return (
    <form className="popup-container" onSubmit={formik.handleSubmit}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>value</TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell align="right">user</TableCell>
              <TableCell align="right">comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row: any) => (
                <TableRow
                  key={row.value}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.value}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                  <TableCell align="right">{row.comment}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <input
                  className={errors.value && "error"}
                  id="value"
                  name="value"
                  onChange={formik.handleChange}
                  value={formik.values.value}
                ></input>
                <div className="errorMessage">{errors.value}</div>
              </TableCell>
              <TableCell align="right">
                <input
                  id="date"
                  name="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                ></input>
              </TableCell>
              <TableCell align="right">
                <input
                  className={errors.user && "error"}
                  id="user"
                  name="user"
                  onChange={formik.handleChange}
                  value={formik.values.user}
                ></input>
                <div className="errorMessage">{errors.user}</div>
              </TableCell>
              <TableCell align="right">
                <input
                  className={errors.comment && "error"}
                  id="comment"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                ></input>
                <div className="errorMessage">{errors.comment}</div>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div className="popup__buttons">
        <button
          className="popup__button_submit"
          onClick={() => {
            if (
              errors.comment !== "" ||
              errors.value !== "" ||
              errors.user !== ""
            ) {
              console.log(`input values:`);
              console.log(formik.values);
            }
          }}
          type="submit"
        >
          Submit
        </button>
        <button
          className="popup__button_cancel"
          onClick={() => {
            dispatch(HandleIsOpen(false));
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default PopupTable;
