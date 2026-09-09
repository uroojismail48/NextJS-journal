
function SemiNav() {
  return (
    <div className="w-full bg-white/20 sticky top-0 justify-around items-center h-10 flex">
<div className="right flex justify-around items-center w-full font-semibold">
    <h1>Gadgets</h1>
    <h1>Smart Home</h1>
    <h1>Audio</h1>
        <h1>Wearables</h1>
            <h1>Acessories</h1>
                <h1>Sale</h1>
</div>
<div className="left flex w-full items-center justify-end gap-5 px-10  font-semibold">
    <h1>US 
         </h1>
       <h1>|</h1>
        <h1> UK  </h1>
      <h1>|</h1>
        <h1>UAE</h1>
</div>
    </div>
  )
}

export default SemiNav