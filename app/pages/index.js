function HomePage({ data }) {

  return (
    <div>
      <h1>Welcome to Karisse's cors-example, {data.name}!</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/example`)
  const data = await res.json()

  return { props: { data } }
}

export default HomePage