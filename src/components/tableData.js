import React from "react";
import { Table, Grid,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableCell,
} from '@material-ui/core';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class TableData extends React.Component{
  render() {
    return(
        <div className='container'>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TableContainer component={Paper}>
              <Table className="" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell>State/UT</TableCell>
                    <TableCell align="left">District</TableCell>
                    <TableCell align="left">Confirmed</TableCell>
                    <TableCell align="left">Active</TableCell>
                    <TableCell align="left">Deceased</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.fat}</TableCell>
                        <TableCell align="left">{row.carbs}</TableCell>
                        <TableCell align="left">{row.protein}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
    )
  }
}
export default TableData;
