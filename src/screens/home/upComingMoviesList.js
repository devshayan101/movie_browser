import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { useState, useEffect } from 'react';

// import tileData from '../../data/swagger.json';
// import useFetch from '../../data/useFetch';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
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
  gridListTile: {
    height:250,
  }
});

function HorizontalScrollTiles(props) {
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
      <GridList className={classes.gridList} cols={6}>
        {DataisLoaded && dataList.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                // title: classes.title,
              }}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

HorizontalScrollTiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalScrollTiles);

