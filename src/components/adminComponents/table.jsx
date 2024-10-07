export default function Table(){

    return(
        <> 
        <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-5 font-semibold bg-gray-100 p-4">
        <div className="col-span-1">Profile Pic</div>
        <div className="col-span-1">name</div>
        <div className="col-span-1">Email</div>
        <div className="col-span-1">EDIT</div>
        <div className="col-span-1">DELETE</div>
      </div>

      <div className="grid grid-cols-5 border-b p-4">
        <div className="col-span-1">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
        <div className="col-span-1">Malcolm Lockyer</div>
        <div className="col-span-1">1961</div>
        <div className="btn">
            <input type="button" value={"EDIT"} className="btn border px-8 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-5 border-b p-4">
        <div className="col-span-1">Witchy Woman</div>
        <div className="col-span-1">The Eagles</div>
        <div className="col-span-1">1972</div>
        <div className="btn">
            <input type="button" value={"EDIT"} className="btn border px-8 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-5 border-b p-4">
        <div className="col-span-1">Shining Star</div>
        <div className="col-span-1">Earth, Wind, and Fire</div>
        <div className="col-span-1">1975</div>
        <div className="btn">
            <input type="button" value={"EDIT"} className="btn border px-8 cursor-pointer" />
        </div>
      </div>
    </div>
  
</>
    )
}