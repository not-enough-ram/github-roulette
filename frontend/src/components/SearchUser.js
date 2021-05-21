import { useState } from 'react'

export default function SearchUser({ onClickSearch }) {
  const [username, setUsername] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    onClickSearch(username)
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button>Search</button>
      </form>
    </section>
  )
}
