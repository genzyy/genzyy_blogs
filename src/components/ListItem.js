import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Router, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    textAlign: 'left',
    backgroundColor: '#1f2029',
    color: '#ffffff'
  },
  media: {
    height: 240
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  author: {
    display: 'flex'
  },
  textcolor: {
    color: '#ffffff'
  },
  bookmarkbutton: {
    color: '#50b77b'
  }
}));

const ListItem = ({ title, description, author, image_url, afterlink }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image_url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              <Link
                style={{ textDecoration: 'none', color: '#ffffff' }}
                to={`/${afterlink}`}
              >
                {title ? title : 'React useState'}
              </Link>
            </Typography>
            <Typography
              className={classes.textcolor}
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {description
                ? description
                : `Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src='https://avatars.githubusercontent.com/u/48408336?s=460&u=fb6a477045ed8250777f6e992d048ace7c06b7ef&v=4' />
            <Box ml={2}>
              <Typography variant='subtitle2' component='p'>
                {author ? author : `genzyy GOD`}
              </Typography>
              <Typography
                className={classes.textcolor}
                variant='subtitle2'
                color='textSecondary'
                component='p'
              >
                March 11, 2021
              </Typography>
            </Box>
          </Box>
          <Box className={classes.bookmarkbutton}>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ListItem;
