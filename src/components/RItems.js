import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#1f2029',
    color: '#ffffff',
    border: '1px solid #595369'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  iconColor: {
    color: '#ffffff'
  },
  heading: {
    paddingBottom: '10px'
  }
});

const RItems = ({ title, description, link }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.heading} variant='h5' component='h2'>
              {title ? title : 'Hello'}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              <Link to={link}>
                <BookIcon className={classes.iconColor} />
              </Link>
            </Typography>
            <Typography variant='body2' component='p'>
              {description ? description : 'well meaning and kindly.'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default RItems;
