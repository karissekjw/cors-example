import { useState, useEffect } from 'react'
import HomeComponent from './components/home-component'

function WithoutCors() {
  const [data, setData] = useState({ name: null })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000')
      .then(async (response) => {
        const result = await response.json()
        setData(result)
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

export default WithoutCors;