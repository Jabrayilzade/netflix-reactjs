import React, {useState} from 'react'
import { styled } from '@mui/system';
import { Button, Grid, TextField, Checkbox, FormControlLabel } from '@mui/material';
import LogoSvg from '../assets/LogoSvg'
import history from '../utils/history.js'

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
  borderRadius: 4,
  width: 314,
  maxWidth: 314,
  transition: 'all 200ms ease',
  '& a:hover': {
    textDecoration: 'underline',
  }
})

const Form = styled('div')({
  marginBottom: 30,
  transition: 'all 200ms ease',
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

const FormControl = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 13,
  color: '#b3b3b3',
  '& .MuiFormControlLabel-label': {
    fontSize: 13,
  },
  '& .MuiFormControlLabel-root': {
    margin: 0
  },
  '& .MuiCheckbox-root': {
    color: '#737373 !important',
    padding: 0,
    marginRight: 2
  }
})

const Footer = styled('div')({
  color: '#737373',
  fontWeight: 500,
  fontSize: 16,
  "& a": {
    color: 'white',
    textDecoration: 'none'
  }
})

const Question = styled('div')({
  marginBottom: 11,
  '& span': {
    color: 'white'
  }
})

const Recaptcha = styled('div')({
  fontSize: 13,
  marginBottom: 11,
  '& span': {
    color: '#0071eb',
    textDecoration: 'unset',
    cursor: 'pointer'
  }
})

const RecaptchaDetails = styled('div', {
  shouldForwardProp: (prop) => prop !== "show" ,
})(({ theme, show }) => ({
  fontSize: 13,
  display: show === 'true' ? 'block' : 'none',
  transition: 'all 200ms ease',
  '& a': {
    color: '#0071eb',
    textDecoration: 'unset'
  }
}))

const HelpLink = styled('a')({
  textDecoration: 'none',
  color: '#b3b3b3',
})


export const LoginPage = () => {
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const handleChangeName = (e) => {
    let value = e.target.value
    setMail(value)
  }

  const handleChangePassword = (e) => {
    let value = e.target.value
    setPassword(value)
  }

  const toggleDetails = () => setShowDetails(state => !state)

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

      <Grid container item xs={12} justifyContent="center" alignItems="center" marginBottom={100}>
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

            <StyledSubmitButton fullWidth onClick={() => history.push('/dashboard')}>
              Sign In
            </StyledSubmitButton>

            <FormControl>
              <FormControlLabel control={<Checkbox size='small' defaultChecked />} label="Remember me" />
              <HelpLink href="https://www.netflix.com/tr-en/LoginHelp" target="_blank">Need help?</HelpLink>
            </FormControl>
          </Form>

          <Footer>
            <Question>New to Netflix? <a href="https://www.netflix.com/tr-en/" target="_blank">Sign up now</a></Question>
            <Recaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span onClick={toggleDetails}> Learn more.</span></Recaptcha>
            <RecaptchaDetails show={showDetails.toString()}>
              The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
            </RecaptchaDetails>
          </Footer>
        </LoginCard>
      </Grid>
    </Grid>
  )
}

export default LoginPage