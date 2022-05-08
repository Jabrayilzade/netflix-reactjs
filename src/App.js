import React from 'react'
import { Route, Switch } from 'react-router'

const LoginPage = React.lazy(() => import('./pages/LoginPage').then(({ LoginPage }) => ({ default: LoginPage })))
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(({ Dashboard }) => ({ default: Dashboard })))

function App() {
  return (
  <React.Suspense fallback={<div>Loading..</div>}>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/dashboard' component={Dashboard}/> 
    </Switch>
  </React.Suspense>
    
  );
}

export default App;
