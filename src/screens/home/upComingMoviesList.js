import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ActionTypes } from '@mui/base';

export default function HorizontalScrollTiles() {


  return (
    <ImageList
  sx={{
        height:250,
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr)) !important",
        gridAutoColumns: "minmax(260px, 1fr)"
    }}
        >
  {itemData.map((image) => (
    <ImageListItem>
      <img src={image.img} alt="unloadable"/>
      <ImageListItemBar title={image.title} />
    </ImageListItem>
  ))}
    </ImageList>
    );
}
const itemData = [
  {
    img: 'https://www.justwatch.com/images/poster/256331954/s332/spider-man-no-way-home',
    title: 'Spiderman',
    author: '@bkristastucchio',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.justwatch.com/poster/262155578/s332/uncharted',
    title: 'Uncharted',
    author: '@rollelflex_graphy726',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.justwatch.com/poster/158738196/s332/doctor-strange-in-the-multiverse-of-madness',
    title: 'Doctor Strange',
    author: '@helloimnik',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.justwatch.com/poster/269214833/s332/fantastic-beasts-3',
    title: 'Sectrets of Dumbuldore',
    author: '@nolanissac',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    cols: 2,
  },
  {
    img: 'https://images.justwatch.com/poster/8730058/s332/avatar',
    title: 'Avatar',
    author: '@hjrc33',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    cols: 2,
  },
  {
    img: 'https://images.justwatch.com/poster/264501885/s332/sonic-the-hedgehog-2',
    title: 'Sonic the Hedgehog-2',
    author: '@arwinneil',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.justwatch.com/poster/249473713/s332/dune-2021',
    title: 'Dune',
    author: '@tjdragotta',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.justwatch.com/poster/268364056/s332/death-on-the-nile',
    title: 'Death on the Nile',
    author: '@katie_wasserman',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.justwatch.com/poster/242624019/s332/zack-snyders-justice-league',
    title: 'Justice League',
    author: '@silverdalex',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    artist_profile:"https://",
    released_date:"dd/mm/yy",
    duration:122,
    rating:7.5,
    genre:"Action, Adventure, Sci-fi",
    trailer:"https://",
    plot:{
        wiki_url:"https:\\wikilink",
        story_line:"story......plot"
    },
    cols: 2,
  },
];
