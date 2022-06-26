import HomeComponent from './components/home-component'

function ServerSidePage({ data, error }) {
  return (
    <HomeComponent error={error} data={data} />
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:4000', { headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()

    return { props: { data } }
  } catch(e) {
    return { props: { error: e.message } }
  }
}

export default ServerSidePage;