import React, {Components} from "react";
import Header from "./Header.js";
import "./moviesData.js";
import "./genre.js";
import "./artists.js"

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import itemData from './itemData';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@material-ui/core/Button';

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

function FormPropsTextFields() {
  return (
    <div className="findMovies">
    <h1>FIND MOVIES BY:</h1>
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          placeholder="Movie Name"
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Genres"
        />

        function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Genres">
            <option value={1}>Action</option>
            <option value={2}>Sci-Fi</option>
            <option value={3}>Drama</option>
            <option value={4}>Crime</option>
            <option value={5}>Adventure</option>
            <option value={6}>Biography</option>
            <option value={7}>Horror</option>
            <option value={8}>Suspense</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Genres</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Genres</ListSubheader>
          <MenuItem value={1}>Action</MenuItem>
          <MenuItem value={2}>Sci-Fi</MenuItem>
          <MenuItem value={3}>Drama</MenuItem>
          <MenuItem value={4}>Crime</MenuItem>
          <MenuItem value={5}>Adventure</MenuItem>
          <MenuItem value={6}>Biography</MenuItem>
          <MenuItem value={7}>Horror</MenuItem>
          <MenuItem value={8}>Suspense</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
      <TextField
          required
          id="outlined-required"
          placeholder="Artists"
        />
        function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Artists">
            <option value={1}>Marlon Brando</option>
            <option value={2}>Al Pacino</option>
            <option value={3}>Christian Bale</option>
            <option value={4}>Heath Ledger</option>
            <option value={5}>Leonardo DiCaprio</option>
            <option value={6}>Joseph Gordon-Levitt</option>
            <option value={7}>Matthew McConaughey</option>
            <option value={8}>Anne Hathaway</option>
            <option value={9}>Rajkummar Rao</option>
            <option value={10}>KayKay Menon</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Artists</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Artists</ListSubheader>
          <MenuItem value={1}>Manisha Koirala</MenuItem>
          <MenuItem value={2}>Rajkumar Hirani</MenuItem>
          <MenuItem value={3}>Marlon Brando</MenuItem>
          <MenuItem value={4}>Leonardo DiCaprio</MenuItem>
          <MenuItem value={5}>Anne Hathaway</MenuItem>
          <MenuItem value={6}>Rajkummar</MenuItem>
          <MenuItem value={7}>Kay Kay Menon</MenuItem>
          <MenuItem value={8}>Anthony LaPaglia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
        <TextField
          required
          id="outlined-required"
          label="Release Date Start"
          placeholder="dd-mm-yyyy"
        />
        <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Release Date Start"
    type="date"
    defaultValue="dd-mm-yyyy"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
        <TextField
          required
          id="outlined-required"
          label="Release Date End"
          placeholder="dd-mm-yyyy"
        />
        <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Release Date End"
    type="date"
    defaultValue="dd-mm-yyyy"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
        <Button variant="contained" color="primary" apply>
          APPLY
        </Button>
      </div>
    </Box>
    </div>
  );
}

    export default Home;

    
    