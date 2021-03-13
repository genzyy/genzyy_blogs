import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#0A0E14',
    color: '#C2D94C',
    borderBottom: '2px solid #C2D94C'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant='h6' color='primary'>
            genzyy_blogs
          </Typography>
          <Typography variant='h6' color='primary'>
            Github
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
