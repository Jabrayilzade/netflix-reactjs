import React from 'react'
import { Grid, Box, Rating, Select, MenuItem, Stack, Typography, FormControl, InputLabel } from "@mui/material"
import Header from "../components/Header"
import { styled } from '@mui/system'

const Movie = styled('div')({
  position: 'relative',
  padding: 10,
  width: 245,
  height: 135,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  justifyContent: 'flex-end',
  '& img': {
    position: 'absolute',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: -1,
  }
})

const sorters = {
  name: (arr) => arr.sort((a, b) => a.name.localeCompare(b.name)),
  rating: (arr) => arr?.sort((a, b) => b.rating - a.rating)
}

export const Dashboard = () => {
  const [sortBy, setSortBy] = React.useState('name')
  const [ratingFilter, setRatingFilter] = React.useState(0)

  const MOVIES = [
    {
      name: 'Nihad', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 4
    },
    {
      name: 'Alborz', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 2
    },
    {
      name: 'Anar', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 3
    },
    {
      name: 'Emin', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 2
    },
    {
      name: 'Teymur', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 5
    },
    {
      name: 'Elvin', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 2
    },
    {
      name: 'Gijdillag', 
      img: 'https://occ-0-3889-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQys67biZmlhAEU6EHTq96eHgo06BSc0MmR2YNNv_NqJkNse_Jxt_g4ee3F3z9NRdMw0ZZeUuv6JuM0DWjYZyCzLlYvyy79AVlcZf058FqVXS_yYaUEc0RHZ24o6JrS0pYOz.jpg?r=79f', 
      rating: 1
    },
  ]

  const [mutatedMovies, setMutatedMovies] = React.useState(MOVIES)

  const handleSortChange = (e) => {
    let type = e.target.value
    setSortBy(type)

    let sortedMovies = sorters?.[type](mutatedMovies)
    setMutatedMovies(sortedMovies && mutatedMovies)
  }

  const handleFilterChange = (e) => {
    let value = +e.target.value
    setRatingFilter(value)

    let filteredMovies = MOVIES.filter((movie) => movie.rating > value)
    let sortedMovies = sorters?.[sortBy](filteredMovies)
    setMutatedMovies(sortedMovies)
  }

  return (
    <>
      <Header/>
      <Box 
        sx={{
          p: 3, pb: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'black'
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} label="Sort By" onChange={handleSortChange}>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="column">
          <Typography>Filter by rating</Typography>
          <Rating name="rating" value={ratingFilter} size="small" onChange={handleFilterChange}/>
        </Stack>
      </Box>
      <Box p={3}>
        <Grid container gap={2}>
          {mutatedMovies.map((movie) => (
            <Grid key={movie.name}>
              <Movie>
                <img src={movie.img} alt="" />
                <Rating name="read-only" value={movie.rating} readOnly size="small"/>
              </Movie>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard