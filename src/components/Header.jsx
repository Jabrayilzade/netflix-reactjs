import { styled } from '@mui/system'
import React from 'react'
import { Avatar, Badge, Grid, IconButton, Stack } from '@mui/material'
import LogoSvg from '../assets/LogoSvg'
import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material'

const StyledHeader = styled(Grid)({
  height: 68,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgb(20, 20, 20)',
  padding: '0 4%'
})

const Nav = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  fontSize: 10,
  gap: 15,
  color: '#e5e5e5',
  whiteSpace: 'nowrap'
})

const NavItem = styled('div', {
  shouldForwardProp: (prop) => prop !== "active" ,
})(({ theme, active }) => ({
  transition: 'all 200ms ease',
  cursor: 'pointer',
  color: active === true && 'white',
  '&:hover': {
    color: '#b3b3b3'
  }
}))



const NAV_LIST = ['Home', 'TV Shows', 'Movies', 'News & Popular', 'My List']
const Header = () => {
  return (
    <StyledHeader>
      <Stack direction="row" spacing={1} alignItems="center">
        <LogoSvg height={30}/>
        <Nav>
          {NAV_LIST.map((name, idx) => (
            <NavItem key={idx} active={idx === 0 ? true : false}>
              {name}
            </NavItem>
          ))}
        </Nav>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center" sx={{color: 'white'}}>
        <IconButton sx={{color: 'white'}}>
          <SearchOutlined/>
        </IconButton>
        <IconButton sx={{color: 'white'}}>
          <Badge badgeContent={'9'} color="primary">
            <NotificationsOutlined/>
          </Badge>
        </IconButton>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 34, height: 34 }}/>
      </Stack>
    </StyledHeader>
  )
}

export default Header