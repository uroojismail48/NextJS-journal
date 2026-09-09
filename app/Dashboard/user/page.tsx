import Link from "next/link";

function User() {
  return (
    <div className="flex justify-evenly ">
 <div className="w-50 h-50 bg-yellow-500">
   <Link href="/Dashboard/user/1" >User 1</Link> 
 </div>
          
 <div className="w-50 h-50 bg-yellow-500">
   <Link href="/Dashboard/user/2" >User 2</Link> 
 </div>
          
         <div className="w-50 h-50 bg-yellow-500">
   <Link href="/Dashboard/user/3" >User 3</Link> 
 </div>
          
        <div className="w-50 h-50 bg-yellow-500">
   <Link href="/Dashboard/user/4" >User 4</Link> 
 </div>
          
   
   
    </div>
  )
}

export default User;