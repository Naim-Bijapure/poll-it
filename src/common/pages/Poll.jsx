import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PollModalWrapped from './PollModel';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  margin: {
    margin: theme.spacing.unit,
  }
});

function Poll(props) {
  const { classes } = props;

  return (
    <div>

      <Paper className={`${classes.root} N`} elevation={3} >
        <Typography variant="h5" component="h3">
          Name: --
        </Typography>
        <Typography variant="h5" component="h3">
          Created by: --
        </Typography>
       
      <PollModalWrapped></PollModalWrapped>
    
      </Paper>
    </div>
  );
}
Poll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Poll);
