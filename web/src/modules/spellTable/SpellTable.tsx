import * as React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = ({ spacing }: Theme) => createStyles({
    root: {
    width: '100%',
    marginTop: spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, level, castingTime, range, duration, concentration) {
  id += 1;
  return { id, name, level, castingTime, range, duration, concentration };
}
// TODO add db query to get list of spells on mount
const rows = [
  createData('Magic Missile', 1, "1 act", "120 ft", "instant", "false"),
];

const RenderTableRows = () => {
  return (
        <TableBody>
          {rows.map(row => {
            return (
                <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric={true}>{row.level}</TableCell>
                <TableCell>{row.castingTime}</TableCell>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.concentration}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
  )
}


function SpellTable(props:any) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Spell Name</TableCell>
            <TableCell numeric={true}>Level</TableCell>
            <TableCell>Casting Time</TableCell>
            <TableCell>Range</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Concentration</TableCell>
          </TableRow>
        </TableHead>
          <RenderTableRows />
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SpellTable);