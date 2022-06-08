import { useState, useEffect } from 'react'

function HomePage() {
  const [data, setData] = useState({ name: null })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/example')
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
      {
        error
        ? <p>Error message: {error}</p>
        : <h1>Welcome to Karisse's cors-example, {data.name}</h1>
      }
    </div>
  )
}

// function HomePage({ data }) {
//   return (
//     <div>
//       <h1>Welcome to Karisse's cors-example, {data.name}!</h1>
//     </div>
//   )
// }

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/example`)
//   const data = await res.json()

//   return { props: { data } }
// }

export default HomePage