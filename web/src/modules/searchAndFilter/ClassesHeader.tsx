import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
};

function ClassesHeader(props:any) {
  const { classes } = props;
  return (
    //   TODO replace these with my hosted icons
    <Grid container={true} justify="center" alignItems="center">
      <img 
      alt="Bard" 
      src="/images/lute.png" 
      className={classes.bigAvatar} 
      />
    </Grid>
  );
}

export default withStyles(styles)(ClassesHeader);