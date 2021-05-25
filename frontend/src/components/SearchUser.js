import { useState } from 'react'
import styled from 'styled-components/macro'

export default function SearchUser({ onClickSearch }) {
  const [username, setUsername] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    onClickSearch(username)
  }

  return (
    <Searchbar>
      <form onSubmit={onSubmit}>
        <img src={'./img/github-icon-vector-29.jpg'} />
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button>Search</button>
      </form>
    </Searchbar>
  )
}

const Searchbar = styled.section`
  position: fixed;
  top: 0px;
  margin: 15px;
  border: black 2px;
`
