import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./MoviesFilterCard.css";

const defaultValues = {
  movieName: "",
  genres: "",
  artists: "",
  startDate: new Date(),
  endDate: new Date(),
};

const styles = {
  card: {
    maxWidth: 345,
    margin: "10px",
    padding: "16px",
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};


 function MoviesFilterCard(props) {
  const { classes } = props;
 ////Genres 
  const [cardListGenres, setCardListGenres] = useState([]);
  const [CardDataGenresisLoaded, setCardDataGenresisLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8085/api/v1/genres")
        .then((res) => {return res.json()})
        .then((json) => {
                setCardListGenres(json.genres);
                setCardDataGenresisLoaded(true);
        })
      },[]);
      
      const cardDataListGenres = cardListGenres;

////Artists
      const [cardListArtists, setCardListArtists] = useState([]);
      const [CardDataArtistsisLoaded, setCardDataArtistsisLoaded] = useState(false);
    
      useEffect(() => {
        fetch("http://localhost:8085/api/v1/artists")
            .then((res) => {return res.json()})
            .then((json) => {
                    setCardListArtists(json.artists);
                    setCardDataArtistsisLoaded(true);
            })
          },[]);
          
          const cardDataListArtists = cardListArtists;    

const [formValues, setFormValues] = React.useState(defaultValues);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
  console.log(formValues);
};
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div>
      <Card className={classes.card}>
        <div className="head">
            <h5>Find Movies By:</h5>
        </div>

        <form onSubmit={handleSubmit} >
        <Grid container className="formClass" alignItems="center" justify="center" direction="column">

        <TextField
                style={{"width": "100%", "marginBottom": "5px"}}
                // sx={{ m: 1, minWidth: 240 , maxWidth:240}}
                id="name-input"
                name="movieName"
                label="Movie Name"
                type="text"
                value={formValues.movieName}
                onChange={handleInputChange}
            />
            
            <FormControl variant="standard" sx={{ m: 1, minWidth: 240 , maxWidth:240}}>
                <InputLabel id="genres-label-id">Genres</InputLabel>
                <Select
                style={{"width": "100%", "marginBottom": "5px"}}
                className="formSubClass"
                labelId="genres-id"
                id="genres-id"
                name="genres"
                value={formValues.genres}
                onChange={handleInputChange}
                label="Genres"
                >
                
                {CardDataGenresisLoaded && cardDataListGenres.map((item) => {
                    return <FormControlLabel key={item.id} 
                    value={formValues.genres} 
                    control={<Checkbox />}
                    label={item.genre}
                    name="genres"
                    onChange={handleInputChange}
                      /> 
                })}
                
                </Select>
            </FormControl>
            <Grid item>

            </Grid>

            <Grid item>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 240 , maxWidth:240}}>
                <InputLabel id="artists-label-id">Artists</InputLabel>
                <Select
                    className="formSubClass"
                labelId="artists-id"
                id="artists-id"
                name="artists"
                value={formValues.artists}
                onChange={handleInputChange}
                label="Artists"
                >
                 {CardDataArtistsisLoaded && cardDataListArtists.map((item) => {
                    return <FormControlLabel key={item.id} 
                    value={formValues.first_name+" "+formValues.last_name} 
                    control={<Checkbox />}
                    label={item.first_name+" "+item.last_name}
                    name={item.first_name+" "+item.last_name}
                    onChange={handleInputChange}
                      />
                })}
                </Select>
            </FormControl>
            </Grid>
            <br />

            <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Stack spacing={2} sx={{ m: 1, minWidth: 240 , maxWidth:240}}>
                    <DatePicker
                    className="formSubClass"
                    disableFuture
                    label="Release Start Date"
                    openTo="year"
                    views={["year", "month", "date"]}
                    value={formValues.startDate}
                    onChange={handleInputChange}
                    renderInput={(params) => <TextField {...params} label="Release Start Date" />}
                    />
                </Stack>
            </LocalizationProvider>    
            </Grid>
            <br />

            <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Stack spacing={2} sx={{ m: 1, minWidth: 240 , maxWidth:240}}>
                    <DatePicker
                    className="formSubClass"
                    disableFuture
                    label="Release End Date"
                    openTo="year"
                    views={["year", "month", "date"]}
                    value={formValues.endDate}
                    onChange={handleInputChange}
                    renderInput={(params) => <TextField {...params} label="Release End Date" />}
                    />
                </Stack>
            </LocalizationProvider>    
            </Grid>
            <br />

            <Button 
                className="formSubClas"  size="large" type="submit" variant="contained" color="primary"
                style={{"width": "100%", "marginBottom": "5px"}}
                 sx={{ display:'flex', m: 1, minWidth: 240 , maxWidth:240}}>Submit</Button>
            <Grid item sx={{ m: 1, minWidth: 240 , maxWidth:240}}>

            </Grid>        
            </Grid>
        </form>
        </Card>
    </div>
  );
}
MoviesFilterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MoviesFilterCard);