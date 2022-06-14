function HomeComponent({ error, data }) {
  return (
    <>
      {
        error
        ? <p>Error message: {error}</p>
        : <h1>Welcome to cors-example, {data.name}</h1>
      }
    </>
  )
}

export default HomeComponent;