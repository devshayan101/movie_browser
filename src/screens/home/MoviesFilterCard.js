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
import "./MoviesFilterCard.css";

const defaultValues = {
  movieName: "",
  genres: "",
  artists: "",
  startDate: new Date(),
  endDate: new Date(),
};




export default function MoviesFilterCard() {

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
    </div>
  );
}

const itemData = [
    {
      img: 'https://www.justwatch.com/images/poster/256331954/s332/spider-man-no-way-home',
      title: 'Spiderman',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      genres:"raw",      
      featured: true,
    },
    {
      img: 'https://images.justwatch.com/poster/262155578/s332/uncharted',
      title: 'Uncharted',
      author: '@rollelflex_graphy726',
      genres:"raw",
    },
    {
      img: 'https://images.justwatch.com/poster/158738196/s332/doctor-strange-in-the-multiverse-of-madness',
      title: 'Doctor Strange',
      author: '@helloimnik',
      genres:"raw",
    },
    {
      img: 'https://images.justwatch.com/poster/269214833/s332/fantastic-beasts-3',
      title: 'Sectrets of Dumbuldore',
      author: '@nolanissac',
      genres:"raw",
      cols: 2,
    },
    {
      img: 'https://images.justwatch.com/poster/8730058/s332/avatar',
      title: 'Avatar',
      author: '@hjrc33',
      genres:"raw",
      cols: 2,
    },
    {
      img: 'https://images.justwatch.com/poster/264501885/s332/sonic-the-hedgehog-2',
      title: 'Sonic the Hedgehog-2',
      author: '@arwinneil',
      genres:"raw",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.justwatch.com/poster/249473713/s332/dune-2021',
      title: 'Dune',
      author: '@tjdragotta',
      genres:"raw",
    },
    {
      img: 'https://images.justwatch.com/poster/268364056/s332/death-on-the-nile',
      title: 'Death on the Nile',
      author: '@katie_wasserman',
      genres:"raw",
    },
    {
      img: 'https://images.justwatch.com/poster/242624019/s332/zack-snyders-justice-league',
      title: 'Justice League',
      author: '@silverdalex',
      genres:"raw",
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
      genres:"raw",
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
      genres:"raw",
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      genres:"raw",
      cols: 2,
    },
  ];
  