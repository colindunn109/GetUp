import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


function Welcome(props) {
  const { classes } = props;
    return(
      <div align="center">
        <h1>Get up, Get out, Get healthy!</h1><br />
        <NavLink to='/login'>
          <Button variant="contained" color="primary" className={classes.button}>
              Login
          </Button>
        </NavLink>
        <NavLink to='/signup'>
          <Button variant="contained" color="primary" className={classes.button}>
              Signup
          </Button>
        </NavLink>
      </div>
    )
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
