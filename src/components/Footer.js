import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '40px 20px'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.footer}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Typography>© genzyy: Rishit Pandey, 2021</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
