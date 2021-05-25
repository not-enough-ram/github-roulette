import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import githubApi from './service/githubAPI'
import SearchUser from './components/SearchUser'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import RepositoryBox from './components/RepositoryBox'
import PullPage from './components/PullPage'

function App() {
  const [profile, setProfile] = useState({})
  // const [error, setError] = useState('')

  const searchForAUser = profile => {
    githubApi
      .get('https://api.github.com/users/' + profile)
      .then(response => response.data)
      .then(setProfile)
    //.catch(error => setError(error.response.status))
  }

  return (
    <Router>
      <Switch>
        <Route path={'/users/:username/:repo/pulls'}>
          <Header>
            <h1>{profile?.login}</h1>
            <Avatar src={profile?.avatar_url} />
          </Header>
          <PullPage />
        </Route>
        <Route path={'/users/:username/repos'}>
          <Header>
            <h1> {profile?.login}</h1>
            <Avatar src={profile?.avatar_url} />
          </Header>
          <RepositoryBox />
        </Route>
        <Route path={['/', '/home']}>
          <Page>
            <SearchUser onClickSearch={searchForAUser} />
            <h1>hello {profile.login} </h1>
            <Avatar src={profile.avatar_url} />

            <Link to={'/users/' + profile.login + '/repos'}>Repositories</Link>
          </Page>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
