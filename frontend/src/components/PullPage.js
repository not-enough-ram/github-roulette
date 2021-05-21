import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import githubApi from '../service/githubAPI'

export default function PullPage() {
  const [pullRequests, setPullRequests] = useState([])
  const { username, repo } = useParams()

  useEffect(() => {
    console.log(repo)
    console.log(repo.name)
    githubApi
      .get(
        'https://api.github.com/repos/' +
          username +
          '/' +
          repo +
          '/pulls?state=all'
      )
      .then(response => setPullRequests(response.data))
  }, [])

  return (
    <section>
      <Link to={'/users/' + username + '/repos'}>back</Link>
      <ul>
        {pullRequests.map(pull => (
          <li key={pull.id}>{pull.title}</li>
        ))}
      </ul>
    </section>
  )
}
