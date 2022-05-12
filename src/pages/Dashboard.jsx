import React from 'react'
import { Grid, Box, Rating, Select, MenuItem, Stack, Typography, FormControl, InputLabel, Button, Modal } from "@mui/material"
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

const StyledModal = styled(Modal)({
  '& .MuiBox-root': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 40,
    '& .MuiTypography-root': {
      color: 'red'
    }
  }
})

const sorters = {
  name: (arr) => arr.sort((a, b) => a.name.localeCompare(b.name)),
  rating: (arr) => arr?.sort((a, b) => b.rating - a.rating)
}

export const Dashboard = () => {
  const [sortBy, setSortBy] = React.useState('name')
  const [ratingFilter, setRatingFilter] = React.useState(0)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MOVIES = [
    {
      name: 'Örümcek Adam evden uzakta', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUy1pBSpcaL_NNiX8JoJN8llZ4dJM3KH603kxCZow4ZcH2o1tyaKGWUcI6XWfnNnS-jLAP1WPqzfgJhx4IrQz_EaCL9ZpA4So5Piv55rKjNB_7P9fekB7Ux4WlpkAynmxwXFrK7GfrjsGroILm_oL4xPGGHLQHqPaM0.webp?r=027', 
      rating: 5,
      description: 'Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.',
      date: '2019',
      cast: 'Tom Holland , Zendaya , Samuel L. Jackson , more',
      duration: '2 h. 9 min.'
    },
    {
      name: 'Zoraki İkili', 
      img: 'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPurZOvE3sJtKlZBSBfhOtTXnBp7qvzptnllXiXhu7jJG6MmB0CSmXVDxdPelrysEga_rANvAa5GNKzaRama7ZGyWsO6wb9hCb8oOi4QfG0iZbrHfAPTmfAG1cZbt1XcUOCE2L6tMFCYHql4agKx3UTgm0BYGOpBM-NjSCJovQwBxAOCVX1sehYCPpBYOc.jpg?r=6b8', 
      rating: 3,
      description: 'Reunited ten years later, two mismatched cops investigate a murder in a divided French town threatened by a grand conspiracy.',
      date: '2022',
      cast: 'Omar Sy , Laurent Lafitte , Izïa Higelin , more',
      duration: '2 h. 1 min.'
    },
    {
      name: 'Inception', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeRXcLeBouNLxinQM6IOAwI7jaoghZoraBAwTdGtmaY39u266m0feRXTEpLc2zUvfL8TQnlvPZEx9cr40sWPMl9f8mm0AECiQZw.webp?r=bd6', 
      rating: 5,
      description: 'A troubled thief who extracts secrets from peoples dreams will lead a dangerous mission in which his latest job will implant an idea in the targets subconscious.',
      date: '2010',
      cast: 'Leonardo DiCaprio , Joseph Gordon-Levitt , Elliot Page , more',
      duration: '2 h. 28 min.'
      },
    {
      name: 'Interstellar', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVjaQIgH4QRRa-RkowGnqD9ASs3mumt_ErW8qWo8C5vD_5haOik07enP1Zlr5EdUExWLYBD6Dd15t3QptcUbnet65TpRsltf8pg.webp?r=107', 
      rating: 5,
      description: 'With humanity on the brink of extinction, a group of astronauts embark on a dangerous journey through a wormhole to find another habitable planet.',
      date: '2014',
      cast: 'Matthew McConaughey , Anne Hathaway , Jessica Chastain , more',
      duration: '2 h. 49 min.'
      },
    {
      name: 'Aquaman', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABePh3u3s9S83ehkK1HobEar-Yh5eoFbGGM0MBz_r2HFQqVq_22MnOuvub2vWvzpKFNAYER91fbyHwIARSYF2u6NZYcNukLyIg-0.webp?r=89d', 
      rating: 4,
      description: 'Amphibious superhero Arthur Curry learns what it means to be Aquaman when he is forced to prevent the king of Atlantis from waging war on the surface world.',
      date: '2018',
      cast: 'Matthew McConaughey , Anne Hathaway , Jessica Chastain , more',
      duration: '2 h. 23 min.'
    },
    {
      name: 'Lucy', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROFqAo7-c7td0bZCGAg1mQL6nom6fEZ6Blq-_swnbr204WuUhYUo9hhrv5d5kTyuX3ZaxlP6tTJH9MbnN7TUuvPfhduXNuqYjI.webp?r=44f', 
      rating: 3,
      description: 'A young American in Taiwan inadvertently becomes a drug dealer. The high-tech drugs that penetrate his body enable him to gain superhuman powers.',
      date: '2014',
      cast: 'Scarlett Johansson , Morgan Freeman , Choi Min-sik , more',
      duration: '1 h. 29 min.'
    },
    {
      name: '6 Underground', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3q_9wqr2TF9qHtYopDKgSlGKllcufd_MuS2tWWYWi2Py4lMuQgjJ4Mff3ou3j_T_iuoym3AwHbX4CUUkvry5fmFj5eSzkU_X5L7I_dZbtULP5C0_eoVRMGBM5W8V92IsY7.jpg?r=ec4', 
      rating: 3,
      description: 'A pretending tech billionaire assembles a group of international agents on a daring and bloody mission to overthrow a tyrannical dictator.',
      date: '2019',
      cast: 'Ryan Reynolds , Mélanie Laurent , Corey Hawkins , more',
      duration: '2 h. 8 min.'
    },
    {
      name: 'Suicide Squad: Gerçek Kötüler', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbndPFMVr1RIora1bIL1aVzFKr_A3iRwoz55sknq6TbGob2GCoMnjjr4_VmGWX8q_xhlcoX-phv4WsScUByXqte0zjpGM52CDSg.webp?r=45b', 
      rating: 3,
      description: 'An undercover government official frees the worlds greatest villains from prison to stop the impending doom in exchange for their freedom.',
      date: '2016',
      cast: 'Will Smith , Jared Leto , Margot Robbie , more',
      duration: '2 h. 2 min.'
      },
    {
      name: '2012', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXCbCktrTqbaSGo3XdLQPNPobcuUHUx9JNo8XMzOpypRk1WNFvDkuFlgTYOQUtoj4BxB65nn7WwEJbvNywa21MUkCVvMISKSMZs.webp?r=e90', 
      rating: 4,
      description: 'When successive natural disasters begin to destroy the world, a divorced father tries to save his family from this horrific disaster.',
      date: '2009',
      cast: 'John Cusack , Amanda Peet , Chiwetel Ejiofor , more',
      duration: '2 h. 38 min.'
      },
    {
      name: 'Joker', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcCvvq_Xi1psW3rO5aeyA3ZPaw5151bOJmHNIZsohh3Wg7iv826o1JFNU1xykXG5V37J2WC42KjwemaQ3F5X-V9sBOGP1AEdXOk.webp?r=e68', 
      rating: 5,
      description: 'In Gotham City in 1981, the mentally unstable failed comedian Arthur Fleck takes on a dark and terrifying new identity after being attacked on the subway.',
      date: '2019',
      cast: 'Joaquin Phoenix , Robert De Niro , Zazie Beetz , more',
      duration: '2 h. 1 min.'
      },
    {
      name: 'Batman Begins', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7OPLj6PQ85a-buCX2lhK-jbR25QHriEqQOj2fDsaMr5s8tVYJnGQ1IF_8Fetw6PpoevdPbohVEaqtn0vbTMBwvgg40kvuKZXU.webp?r=bca', 
      rating: 4,
      description: 'When a corrupt city is under a toxic threat, Bruce Wayne is at odds with a group of assassins. His own problems are no longer the only things he has to wage war on.',
      date: '2005',
      cast: 'Christian Bale , Michael Caine , Liam Neeson , more',
      duration: '2 h. 19 min.'
      },
    {
      name: 'The Adam Project', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABayDJ8O5HhMlqIqyHPSoxk2sSt3z6v44dIthDN0sc0AmI5SQlA0qyH91OknMyBjAF-OJ2DYLwDVkHrjYEGfdQl0DuNS7-UGGewRwTbna5FtdjC46hM0beXbANDAPusQSztPR.jpg?r=928', 
      rating: 3,
      description: 'Combat pilot Adam Reed, who accidentally crash-landed in 2022 while traveling through time, teams up with his own 12-year-old self to save the future.',
      date: '2022',
      cast: 'Ryan Reynolds , Mark Ruffalo , Jennifer Garner , more',
      duration: '1 h. 46 min.'
      },
    {
      name: 'Pokémon Dedektif Pikachu', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZrFGj_k95Bk4oxSQMQ6sqbF-6bqdPSjwnhmnrKCw1hgFRR7J1ngIbv2cM7ub6lWaOB14clhkyDq7t164c7qzbl8juZuOZ0LhUA.webp?r=9e8', 
      rating: 3,
      description: 'In a world where humans and Pokémon co-exist, a Pikachu tracks down his missing partner and teams up with his partners son to solve the case.',
      date: '2019',
      cast: 'Ryan Reynolds , Justice Smith , Kathryn Newton , more',
      duration: '1 h. 44 min.'
      },
    {
      name: 'World War Z', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQGdq1vbSNmu0_5CS6NXwKgMSHYJOIcVHYT3XZ0lSoDytwNzj-7rj590sFm6UH04yuPWHTTpZqFU-oZZqpj24Ifnq9syMVIkiI.webp?r=9b4', 
      rating: 3,
      description: 'A UN officer races against time and fate as he travels the world to stop the deadly zombie virus epidemic.',
      date: '2013',
      cast: 'Brad Pitt , Mireille Enos , Daniella Kertesz , more',
      duration: '1 h. 56 min.'
      },
    {
      name: 'Sherlock Holmes', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdbF0EiAvR_xybRHa194q-XA-hnIkMPoDsAuEyLMcyqfsvkiQpIPoT7S3iHnv9-8sUjG-yXGOlwAsSSruYIIELUrHZyucSOQ7Rg.webp?r=5ec', 
      rating: 4,
      description: 'For this eccentric detective, the game has begun. With the help of his partner, he must use both fighting techniques and ingenuity to track down a treacherous foe.',
      date: '2009',
      cast: 'Robert Downey Jr. , Jude Law , Rachel McAdams , more',
      duration: '2 h. 8 min.'
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

    let filteredMovies = MOVIES.filter((movie) => movie.rating >= value)
    let sortedMovies = sorters?.[sortBy](filteredMovies)
    setMutatedMovies(sortedMovies)
  }

  const handleAddMovie = () => {
    setMutatedMovies(state => [...state, {
      name: 'Sherlock Holmes', 
      img:  'https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdbF0EiAvR_xybRHa194q-XA-hnIkMPoDsAuEyLMcyqfsvkiQpIPoT7S3iHnv9-8sUjG-yXGOlwAsSSruYIIELUrHZyucSOQ7Rg.webp?r=5ec', 
      rating: 4
    }])
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

        <Button onClick={handleAddMovie}>Remove movie</Button>
        <Button onClick={handleOpen}>Add movie</Button>
        <Button onClick={handleOpen}>Edit movie</Button>

        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <div></div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </StyledModal>
        
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