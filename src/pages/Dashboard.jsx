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
    name: 'Örümcek Adam evden uzakta', 
    img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUy1pBSpcaL_NNiX8JoJN8llZ4dJM3KH603kxCZow4ZcH2o1tyaKGWUcI6XWfnNnS-jLAP1WPqzfgJhx4IrQz_EaCL9ZpA4So5Piv55rKjNB_7P9fekB7Ux4WlpkAynmxwXFrK7GfrjsGroILm_oL4xPGGHLQHqPaM0.webp?r=027', 
    rating: 4
    },
    {
    name: 'Zoraki İkili', 
    img: 'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPurZOvE3sJtKlZBSBfhOtTXnBp7qvzptnllXiXhu7jJG6MmB0CSmXVDxdPelrysEga_rANvAa5GNKzaRama7ZGyWsO6wb9hCb8oOi4QfG0iZbrHfAPTmfAG1cZbt1XcUOCE2L6tMFCYHql4agKx3UTgm0BYGOpBM-NjSCJovQwBxAOCVX1sehYCPpBYOc.jpg?r=6b8', 
    rating: 3
    },
    {
      name: 'Inception', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeRXcLeBouNLxinQM6IOAwI7jaoghZoraBAwTdGtmaY39u266m0feRXTEpLc2zUvfL8TQnlvPZEx9cr40sWPMl9f8mm0AECiQZw.webp?r=bd6', 
      rating: 5
      },
    {
      name: 'Interstellar', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVjaQIgH4QRRa-RkowGnqD9ASs3mumt_ErW8qWo8C5vD_5haOik07enP1Zlr5EdUExWLYBD6Dd15t3QptcUbnet65TpRsltf8pg.webp?r=107', 
      rating: 5
      },
    {
      name: 'Aquaman', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABePh3u3s9S83ehkK1HobEar-Yh5eoFbGGM0MBz_r2HFQqVq_22MnOuvub2vWvzpKFNAYER91fbyHwIARSYF2u6NZYcNukLyIg-0.webp?r=89d', 
      rating: 4},
    {
      name: 'Lucy', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROFqAo7-c7td0bZCGAg1mQL6nom6fEZ6Blq-_swnbr204WuUhYUo9hhrv5d5kTyuX3ZaxlP6tTJH9MbnN7TUuvPfhduXNuqYjI.webp?r=44f', 
      rating: 3},
    {
      name: '6 Underground', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3q_9wqr2TF9qHtYopDKgSlGKllcufd_MuS2tWWYWi2Py4lMuQgjJ4Mff3ou3j_T_iuoym3AwHbX4CUUkvry5fmFj5eSzkU_X5L7I_dZbtULP5C0_eoVRMGBM5W8V92IsY7.jpg?r=ec4', 
      rating: 3},
    {
      name: 'Suicide Squad: Gerçek Kötüler', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbndPFMVr1RIora1bIL1aVzFKr_A3iRwoz55sknq6TbGob2GCoMnjjr4_VmGWX8q_xhlcoX-phv4WsScUByXqte0zjpGM52CDSg.webp?r=45b', 
      rating: 3
      },
    {
      name: '2012', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXCbCktrTqbaSGo3XdLQPNPobcuUHUx9JNo8XMzOpypRk1WNFvDkuFlgTYOQUtoj4BxB65nn7WwEJbvNywa21MUkCVvMISKSMZs.webp?r=e90', 
      rating: 4
      },
    {
      name: 'Joker', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcCvvq_Xi1psW3rO5aeyA3ZPaw5151bOJmHNIZsohh3Wg7iv826o1JFNU1xykXG5V37J2WC42KjwemaQ3F5X-V9sBOGP1AEdXOk.webp?r=e68', 
      rating: 5
      },
    {
      name: 'Batman Begins', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7OPLj6PQ85a-buCX2lhK-jbR25QHriEqQOj2fDsaMr5s8tVYJnGQ1IF_8Fetw6PpoevdPbohVEaqtn0vbTMBwvgg40kvuKZXU.webp?r=bca', 
      rating: 4
      },
    {
      name: 'The Adam Project', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABayDJ8O5HhMlqIqyHPSoxk2sSt3z6v44dIthDN0sc0AmI5SQlA0qyH91OknMyBjAF-OJ2DYLwDVkHrjYEGfdQl0DuNS7-UGGewRwTbna5FtdjC46hM0beXbANDAPusQSztPR.jpg?r=928', 
      rating: 3
      },
    {
      name: 'Pokémon Dedektif Pikachu', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZrFGj_k95Bk4oxSQMQ6sqbF-6bqdPSjwnhmnrKCw1hgFRR7J1ngIbv2cM7ub6lWaOB14clhkyDq7t164c7qzbl8juZuOZ0LhUA.webp?r=9e8', 
      rating: 3
      },
    {
      name: 'World War Z', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQGdq1vbSNmu0_5CS6NXwKgMSHYJOIcVHYT3XZ0lSoDytwNzj-7rj590sFm6UH04yuPWHTTpZqFU-oZZqpj24Ifnq9syMVIkiI.webp?r=9b4', 
      rating: 3
      },
    {
      name: 'Sherlock Holmes', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdbF0EiAvR_xybRHa194q-XA-hnIkMPoDsAuEyLMcyqfsvkiQpIPoT7S3iHnv9-8sUjG-yXGOlwAsSSruYIIELUrHZyucSOQ7Rg.webp?r=5ec', 
      rating: 4
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