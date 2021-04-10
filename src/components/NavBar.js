import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#0A0E14',
    color: '#98c379',
    borderBottom: '2px solid #98c379'
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
            <Link style={{ textDecoration: 'none', color: '#98c379' }} to='/'>
              genzyy
            </Link>
          </Typography>
          <a
            style={{ textDecoration: 'none' }}
            href='https://github.com/genzyy?tab=overview&from=2021-03-01&to=2021-03-14'
            target='_blank'
          >
            <Typography
              style={{ color: '#98c379' }}
              variant='h6'
              color='primary'
            >
              Github
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

/*<Link
              style={{ textDecoration: 'none', color: '#c2d94c' }}
              to='https://github.com/genzyy?tab=overview&from=2021-03-01&to=2021-03-14'
              target='_blank'
            >
              Github
            </Link> */
