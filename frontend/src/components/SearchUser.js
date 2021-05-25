import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import githubAPI from '../service/githubAPI'

export default function SearchUser({ setProfile }) {
  const [username, setUsername] = useState('')

  useEffect(() => {
    githubAPI
      .get('https://api.github.com/users/' + username)
      .then(response => response.data)
      .then(setTimeout({ setProfile }, 3000))
      .catch(error => console.error(error))
  }, [username])

  return (
    <SearchUserStyle>
      <input
        type="text"
        value={username}
        placeholder="Enter github username"
        onChange={event => setUsername(event.target.value)}
      />
    </SearchUserStyle>
  )
}

const SearchUserStyle = styled.section`
  position: fixed;
  top: 85%;
`
