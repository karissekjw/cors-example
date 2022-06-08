import { useState, useEffect } from 'react'

function WithoutCors() {
  const [data, setData] = useState({ name: null })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000')
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
      {
        error
        ? <p>Error message: {error}</p>
        : <h1>Welcome to Karisse's cors-example, {data.name}</h1>
      }
    </div>
  )
}

export default WithoutCors