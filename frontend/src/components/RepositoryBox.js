import { useEffect, useState } from 'react'
import githubApi from '../service/githubAPI'
import { Link, useParams } from 'react-router-dom'

export default function RepositoryBox() {
  const [repos, setRepos] = useState([])
  const { username } = useParams()

  useEffect(() => {
    githubApi
      .get('https://api.github.com/users/' + username + '/repos')
      .then(response => setRepos(response.data))
  })

  return (
    <section>
      <Link to={'/'}>back</Link>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link to={'/users/' + username + '/' + repo.name + '/pulls'}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
