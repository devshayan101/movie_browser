import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarRating from './starRating';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import StarBorderIcon from '../../assets/star_border.svg';
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


  return (
    <div className={classes.container}>
    <div className={classes.star}>
      <b>Rate this movies:</b> <br />
      

      <StarRating />

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
