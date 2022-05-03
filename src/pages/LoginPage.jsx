import React, {useState} from 'react'
import { styled } from '@mui/system';
import { Button, Grid, TextField } from '@mui/material';
import LogoSvg from '../assets/LogoSvg'

const BackgroundImageWrapper = styled('div')({
  backgroundSize: 'cover',
  display: 'block',
  height: '100%',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'absolute',
  width: '100%',
  zIndex: -1,
  backgroundColor: 'black',
})

const BackgroundImage = styled('img')({
  minHeight: '100%',
  minWidth: '100%',
  position: 'absolute',
  opacity: .5,
})

const Header = styled('div')({
  paddingLeft: '3%',
  paddingTop: 22,
  paddingBottom: 22
})

const LoginCard = styled('div')({
  background: 'rgba(0,0,0,.75)',
  padding: '60px 68px 40px',
  borderRadius: 4
})

const Form = styled('div')({
  width: 314,
  marginBottom: 30,
  '& .form-header': {
    color: '#fff'
  }
})

const StyledTextField = styled(TextField)({
  height: 50,
  background: '#333333',
  borderRadius: 4,
  '& .MuiOutlinedInput-root': {
    background: '#333333'
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '&:not(last-child)': {
    marginBottom: 16
  }
})

const StyledSubmitButton = styled(Button)({
  textTransform: 'unset',
  background: '#e50a13',
  fontSize: 16,
  color: '#fff',
  margin: '24px 0 12px',
  '&:hover': {
    background: '#e50a13',
  }
})

const Footer = styled('div')({
})


const LoginPage = () => {
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeName = (e) => {
    let value = e.target.value
    setMail(value)
  }

  const handleChangePassword = (e) => {
    let value = e.target.value
    setPassword(value)
  }

  //? useState
  //? useEffect

  return (
    <Grid container direction="column">

      <BackgroundImageWrapper>
        <BackgroundImage src="https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/7461d521-ea6f-4ac5-80c6-942bbe8c2c2f/TR-en-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </BackgroundImageWrapper>

      <Grid item xs={12}>
        <Header>
          <LogoSvg width="167" height="45"/>
        </Header>
      </Grid>

      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <LoginCard>
          <Form>
            <h1 className="form-header">Sign in</h1>

            <StyledTextField 
              name="email"
              value={email}
              onChange={(e) => handleChangeName(e)}
              label="Email or phone number" 
              fullWidth 
            />

            <StyledTextField 
              name="password"
              value={password}
              onChange={(e) => handleChangePassword(e)}
              label="Password" 
              type="password" 
              fullWidth 
            />

            <StyledSubmitButton fullWidth>
              Sign In
            </StyledSubmitButton>

            <Grid container justifyContent="space-between">
              <Grid item>Remember me</Grid>
              <Grid item>Need help?</Grid>
            </Grid>
          </Form>
        </LoginCard>
      </Grid>

      <Grid item xs={12}>
        <Footer>

        </Footer>
      </Grid>
    </Grid>
  )
}

export default LoginPage