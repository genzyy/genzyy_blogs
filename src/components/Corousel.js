import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1615313324944-1bcdf0dc2211?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
      fontSize: '3rem'
    }
  }
}));

const Corousel = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Box>React Blogs</Box>
      </Box>
    </div>
  );
};

export default Corousel;
