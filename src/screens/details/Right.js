import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '10px',
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  textField:{
    // marginLeft: '10px',
    marginTop: '16px',
    marginBottom: '16px',
    fontWeight: 'bold',
    textAlign: 'left',
  }
});

function TitlebarGridList(props) {
  const { classes } = props;

  const handleChange = (event) => {
    //stars rating function
  }

  return (
    <div className={classes.container}>
    <div className={classes.star}>
      <b>Rate this movies:</b> <br />
      <svg xmlns="http://www.w3.org/2000/svg" id="one" onClick={handleChange} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" id="two" onClick={handleChange} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" id="three" onClick={handleChange} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" id="four" onClick={handleChange} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" id="five" onClick={handleChange} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
    </div>
    <div className={classes.root}>
      <div className={classes.textField}>Artists:</div>
      <GridList  className={classes.gridList}>
        
       {/* Used ternary operator to check if the data is loaded and to execute .map function only when data is loaded. */}
        {(props.rightDataArtistsProfile!== undefined) ?  props.rightDataArtistsProfile.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.profile_url} 
            alt={tile.first_name+" "+tile.last_name} />
            <GridListTileBar
              title={tile.first_name+" "+tile.last_name}              
            />
          </GridListTile>
        )):null}

      </GridList>
    </div>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
