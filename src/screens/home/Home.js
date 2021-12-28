import React, {Components} from "react";
import Header from "./Header.js";
import "./moviesData.js";

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import itemData from './itemData';

class Home extends Components
{
    render()
    {
        return(
            <div>
            <Header />
            <div className="Upcoming Movies">
            <span>Upcoming Movies</span>
            </div>
            </div>
        );
        }
    }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

// eslint-disable-next-line no-unused-vars
function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className="flex-container">
    <div className="left">
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={4}>
        {itemData.map((poster_url) => (
          <ImageListItem key={poster_url.img}>
            <img src={poster_url.img} alt={poster_url.title} />
            <ImageListItemBar
              title={poster_url.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    </div>
    </div>
  );
}
    export default Home;

    
    