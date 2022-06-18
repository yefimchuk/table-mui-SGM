import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import {useFormik} from "formik";
import {Button, Checkbox, Form, Input} from 'antd';
// @ts-ignore
import {useDispatch, useSelector} from 'react-redux';
import {addRows} from "../../BLL/Popup/popup.slice";
import {selectPopup} from "../../BLL/Popup/popup.selector";

export default function PopupTable() {
    let dispatch = useDispatch()
    let {rows} = useSelector(selectPopup);

    let data = moment(new Date()).format("L");
    const formik = useFormik({
        initialValues: {
            value: "",
            date: data,
            user: "d",
            comment: "",
        },
        onSubmit: (values: any) => {

            dispatch(addRows({values}))

        },
    });

    return (

        <form onSubmit={formik.handleSubmit}>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>value</TableCell>
                            <TableCell align="right">data</TableCell>
                            <TableCell align="right">user</TableCell>
                            <TableCell align="right">comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row: any) => (
                            <TableRow
                                key={row.value}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
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
                                    id="value"
                                    name="value"
                                    onChange={formik.handleChange}
                                    value={formik.values.value}
                                ></input>
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
                                <Form.Item
                                    label="user"
                                    id="user"
                                    name="user"
                                    rules={[{required: true, message: 'Please input your username!'}]}
                                >
                                    <Input onChange={formik.handleChange}
                                           value={formik.values.user}/>
                                </Form.Item>
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    id="comment"
                                    name="comment"
                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
                                ></input>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>

            </TableContainer>
            <button>add</button>
        </form>
    );
}
