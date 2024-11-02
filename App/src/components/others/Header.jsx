import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between m-10 p-10 bg-[#1C1C1C]">
        <h1 className="font-semibold"> Hello <br/> <span className=" text-3xl font-semibold">Kunal 👋 </span></h1>
        <button className="bg-red-400 rounded-xl px-3 py-2 font-medium"> Log Out</button>
    </div>
  )
}

export default Header