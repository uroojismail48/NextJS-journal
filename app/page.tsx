
import Banner from "./component/Banner"
import  Main  from "./component/Main"
import Navbar from "./component/Navbar"

import SemiNav from "./component/SemiNav"

function page(){
  return (
    <div className=" w-full h-full ">
     <div className="bg-green-900 w-full h-full ">
      <Navbar/>
      <SemiNav/>
    <Main/>
  
      </div>
<Banner/>

    </div>
  )
}

export default page