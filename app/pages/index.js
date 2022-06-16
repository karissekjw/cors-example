import { useState, useEffect } from 'react'
import HomeComponent from './components/home-component'

function HomePage() {
  const [data, setData] = useState({ name: null })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/example', { headers: { 'Content-Type': 'application/json' } })
      .then(async (res) => {
        const response = await res.json()
        setData(response)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <HomeComponent error={error} data={data} />
    </div>
  )
}

export default HomePage;