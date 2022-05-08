import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useState} from "react";
import RenderInWindow from "../PopupWindow/PopupSetup";
import PopupTable from "../PopupWindow/PopupTable";
import {selectTableTextData} from "../../BLL/Table/table.selector";
import {useSelector} from "react-redux";
//imports

export default function ColumnGroupingTable() {
    const [open, setOpen] = useState(false);
    const textData: any = Object.entries(useSelector(selectTableTextData));

    const columns: any = Array.from(
        new Set(
            textData.flatMap(
                (n: { G: ArrayLike<unknown> | { [s: string]: unknown } }[]) => {
                    // @ts-ignore
                    return Object.values(n[1].G).flatMap(Object.keys);
                }
            )
        )
    ).sort();

    const years: any = Array.from(
        new Set(textData.flatMap((n: { G: {} }[]) => Object.keys(n[1].G)))
    ).sort((a: any, b: any) => a - b);

    return (
        <Paper sx={{width: "100%"}}>
            <TableContainer sx={{maxHeight: 600}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell rowSpan={2}>regions</TableCell>
                            {years.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
                                <TableCell align="center" colSpan={columns.length}>
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {years.flatMap(((n: any) =>
                                    columns.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) =>
                                        <TableCell>{item}</TableCell>)
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {textData.map(([region, {G}]: Array<any>) => (
                            <TableRow>
                                <TableCell>{region}</TableCell>
                                {years.flatMap((n: string | number) =>
                                    columns.map((m: string | number) => (
                                        <TableCell onClick={() => setOpen(true)}>
                                            {G[n]?.[m]?.value ?? 0}
                                        </TableCell>
                                    ))
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {open && (
                <RenderInWindow>
                    <PopupTable/>
                </RenderInWindow>
            )}
        </Paper>
    );
}
