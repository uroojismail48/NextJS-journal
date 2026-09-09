import User from "./user/page"

function Dashboard() {
  return (
    <div className="h-full w-full  flex gap-10 flex-col">
        <div className="text-lg"><h1>Dashboard</h1></div>
        <User/>
    </div>
  )
}

export default Dashboard