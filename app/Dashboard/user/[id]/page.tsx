
const UserId = async ({params} : {params : Promise<{id:string}>}) => {
  const {id} = await params
    return (
    <div className="w-full h-screen flex justify-center items-center font-bold text-4xl" >userID{id}</div>
  )
}

export default UserId;