import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import {Field, Formik, useFormik} from "formik";
import {Button, Checkbox, Form, Input} from 'antd';
import "antd/dist/antd.css";
// @ts-ignore
import './popup.css'
import NewWindow from 'react-new-window'
import {useDispatch, useSelector} from 'react-redux';
import {addRows} from "../../BLL/Popup/popup.slice";
import {selectPopup} from "../../BLL/Popup/popup.selector";
import * as Yup from 'yup';
import {HandleIsOpen} from "../../BLL/Table/table.slice";


let errors: any = {};

let PopupTable = () => {


    let dispatch = useDispatch()
    let {rows} = useSelector(selectPopup);
    console.log(isNaN(parseInt('2')))
    let data = moment(new Date()).format("L");
    const formik = useFormik({
        initialValues: {
            value: "",
            date: data,
            user: "",
            comment: "",
        },
        validate: (values) => {

            if (!values.value) {
                errors.value = 'Required';

            } else {

                if (isNaN(parseInt(values.value))) {
                    errors.value = 'only numbers';
                } else {
                    errors.value = '';
                }

            }
            if (!values.comment) {
                errors.comment = 'Required';
            } else {
                errors.comment = '';
            }
            if (!values.user) {
                errors.user = 'Required';
            } else {
                errors.user = '';
            }
            if (errors.comment === '' && errors.value === '' && errors.user === '') {

                errors = {}
            }

            return errors;
        },
        onSubmit: (values: any) => {
            dispatch(addRows({values}))
        },

    });


    return (

        <form onSubmit={
            formik.handleSubmit
        }>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650,}} aria-label="simple table">
                    <TableHead style={{margin: 10}}>
                        <TableRow>
                            <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                            >value</TableCell>
                            <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                       align="right">data</TableCell>
                            <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                       align="right">user</TableCell>
                            <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                       align="right">comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row: any) => (
                            <TableRow
                                key={row.value}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}} component="th"
                                           scope="row">
                                    {row.value}
                                </TableCell>
                                <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                           align="right">{row.date}</TableCell>
                                <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                           align="right">{row.user}</TableCell>
                                <TableCell style={{borderBottomStyle: "solid", borderColor: "#dfdfdf"}}
                                           align="right">{row.comment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableHead>

                        <TableRow>

                            <TableCell align="right">
                                <input
                                    id="value"
                                    name="value"
                                    onChange={formik.handleChange}
                                    value={formik.values.value}
                                ></input>
                                <div>{errors.value}</div>

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
                                    id="user"
                                    name="user"
                                    onChange={formik.handleChange}
                                    value={formik.values.user}

                                ></input>
                                <div>{errors.user}</div>
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    id="comment"
                                    name="comment"
                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
                                ></input>
                                <div>{errors.comment}</div>
                            </TableCell>

                        </TableRow>

                    </TableHead>
                </Table>

            </TableContainer>
            <button type="submit">Submit</button>
            <button onClick={() => {
                dispatch(HandleIsOpen(false))
            }}>Cancel
            </button>

        </form>
    );
}
export default PopupTable