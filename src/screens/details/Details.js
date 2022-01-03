import React, {Components} from "react";
import "./Header.js";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LessThan } from "react-icons/";

class Details extends Components
{
    render()
    {
        return(
            <div className="book">
            <Button variant="contained" color="primary" login>
          LOGIN
        </Button>
        <Button variant="contained" color="primary" logout>
          LOGOUT
        </Button>
            <Button variant="contained" color="primary" bookShow>
          BOOK SHOW
        </Button>
     </div>
        );
        }
        render1()
    {
        return(
            <div className="home">
            <Button variant="contained" color="primary" backToHome>
          Back to Home
        </Button>
     </div>
        );
        }
    }

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});
// eslint-disable-next-line no-unused-vars
function Types() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
<Typography variant="button" display="block" gutterBottom>
Back to Home
</Typography>
</div>
  );
}
class Icons extends Components {
  render() {
      return (
          <div>
              <LessThan /> 
          </div>
      );
  }
}
    export default (Details) (Icons);