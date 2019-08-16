import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  root: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    width: "80vw",
    margin: "auto",
    // background: "rgb(230,220,220)"
  },
});

function PaperSheet(props) {
  const { classes } = props;
  
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.text}>
          {props.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(PaperSheet);