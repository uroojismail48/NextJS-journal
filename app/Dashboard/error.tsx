"use client"
function Error({
    error, reset
}: 
{
    error : Error ;
    reset : () => void
}

) {
  return (
    <div>
      <h2>Kuch ghalat ho gaya!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Dobara try karo</button>
    </div>
  )
}

export default Error