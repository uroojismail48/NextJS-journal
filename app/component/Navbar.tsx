import Link from "next/link"

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-around bg-white w-full">
<div className=" flex flex-col items-center justify-center font-bold text-black h-full w-50">
    <h1 className="text-3xl font-extrabold">TECHVERSE</h1>
    <p>Discover. Shop. Upgrade</p>
</div>
<div className=" h-full w-150  flex justify-center items-center ">
    <input type="text" placeholder="Search for tech gadgets, ideas and more"
    className="border border-black/20 bg-black/4 p-4 w-140 rounded-3xl text-black " />

</div>
<div className=" flex text-black items-center justify-around font-bold text-lg h-full w-100">
    <Link href="/">Home</Link>
  <Link href="/Products">Products</Link>
    <Link href="/Category">Categories</Link>
    <Link href="/Shop">Shop</Link>
</div>

    </div>

  )
}

export default Navbar