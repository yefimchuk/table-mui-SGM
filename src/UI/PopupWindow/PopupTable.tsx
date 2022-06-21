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
import "./popup.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRows } from "../../BLL/Popup/popup.slice";
import { selectPopup } from "../../BLL/Popup/popup.selector";
import { handleIsOpen } from "../../BLL/Table/table.slice";
import { errorTypes } from "../../../types/popupTableTypes";
import {Input, Typography} from "@mui/material";
const uniqid = require("uniqid");
let errors: errorTypes = {};

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
    onSubmit: (values, { resetForm }) => {
      dispatch(addRows({ values }));
      resetForm({
        values: {
          value: "",
          date: data,
          user: "phil",
          comment: "",
        },
      });
    },
  });

  return (
    <form className="popup__container" onSubmit={formik.handleSubmit}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#13171c",
                  borderColor: "#949494",
                  fontSize: 18,
                  color: "#f0f6fc",
                }}
              >
                value
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#13171c",
                  borderColor: "#949494",
                  fontSize: 18,
                  color: "#f0f6fc",
                }}
                align="right"
              >
                data
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#13171c",
                  borderColor: "#949494",
                  fontSize: 18,
                  color: "#f0f6fc",
                }}
                align="right"
              >
                user
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#13171c",
                  borderColor: "#949494",
                  fontSize: 18,
                  color: "#f0f6fc",
                }}
                align="right"
              >
                comment
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map(
                (row: {
                  value:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  date:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  user:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  comment:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <TableRow
                    key={uniqid()}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      style={{
                        backgroundColor: "#21262d",
                        borderColor: "#949494",
                        fontSize: 16,
                        color: "#f0f6fc",
                      }}
                      component="th"
                      scope="row"
                    >
                      {row.value}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#21262d",
                        borderColor: "#949494",
                        fontSize: 16,
                        color: "#f0f6fc",
                      }}
                      align="right"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#21262d",
                        borderColor: "#949494",
                        fontSize: 16,
                        color: "#f0f6fc",
                      }}
                      align="right"
                    >
                      {row.user}
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#21262d",
                        borderColor: "#949494",
                        fontSize: 16,
                        color: "#f0f6fc",
                      }}
                      align="right"
                    >
                      {row.comment}
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: "#21262d", borderColor: "#949494" }}
                align="right"
              >
                <Input
                  className={`input ${errors.value && "error"}`}
                  id="value"
                  name="value"
                  onChange={formik.handleChange}
                  value={formik.values.value}
                ></Input>
                <Typography  className="errorMessage" variant="h5" component="h4">
                  {errors.value}
                </Typography>;

              </TableCell>
              <TableCell
                style={{ backgroundColor: "#21262d", borderColor: "#949494" }}
                align="right"
              >
                <Input
                  className={`input `}
                  id="date"
                  name="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                ></Input>
                <Typography  className="errorMessage"variant="h5" component="h4">

                </Typography>;
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#21262d", borderColor: "#949494" }}
                align="right"
              >
                <Input
                  className={`input ${errors.user && "error"}`}
                  id="user"
                  name="user"
                  onChange={formik.handleChange}
                  value={formik.values.user}
                ></Input>
                <Typography  className="errorMessage"variant="h5" component="h4">
                  {errors.user}
                </Typography>;
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#21262d", borderColor: "#949494" }}
                align="right"
              >
                <Input
                  className={`input ${errors.comment && "error"}`}
                  id="comment"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                ></Input>
                <Typography  className="errorMessage" variant="h5" component="h4">
                  {errors.comment}
                </Typography>;
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
            dispatch(handleIsOpen(false));
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default PopupTable;
