import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 350,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function ReleasedMovies(props) {
  const { classes } = props;
  const [itemList, setItemList] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8085/api/v1/movies")
        .then((res) => {return res.json()})
        .then((json) => {
                setItemList(json.movies);
                setDataisLoaded(true);
        })
      },[]);
      
      const dataList = itemList;

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} cols={4} className={classes.gridList}>
        
        {DataisLoaded && dataList.map(tile => (
          <GridListTile key={tile.id}>
            <Link to={`/movie/${tile.id}`}>
            <img src={tile.poster_url} alt={tile.title} />
            </Link>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Release Date: {tile.release_date}</span>}              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ReleasedMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleasedMovies);
