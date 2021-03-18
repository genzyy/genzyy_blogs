import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
            <Link style={{ textDecoration: 'none', color: '#c2d94c' }} to='/'>
              genzyy
            </Link>
          </Typography>
          <a
            style={{ textDecoration: 'none' }}
            href='https://github.com/genzyy?tab=overview&from=2021-03-01&to=2021-03-14'
            target='_blank'
          >
            <Typography variant='h6' color='primary'>
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
