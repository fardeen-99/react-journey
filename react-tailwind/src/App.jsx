import React from 'react'

const App = () => {
  return (
<>
< main className=' flex flex-col min-h-screen w-full '>

<nav className=' flex justify-between w-full bg-gray-800 p-4 ' ><h1 className='text-shadow-emerald-900 text-2xl text-[wheat] font-medium  capitalize' >fardeen</h1>
  <ul className=' flex gap-2.5 text-xl text-white px-2'>
    <li>home</li>
    <li>about</li>
    <li>movie</li>
    <li>contact</li>
  </ul>
  
 </nav>
 <section className='flex-1 bg-fuchsia-900  m-4 rounded-2xl relative'>

<div  className=' w-full flex items-center justify-center ' ><img  className=' w-[20vw] object-cover object-top absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwKxkfBaYP-yM9HzItjxz2hx1piA4fDMUXg&s" alt="virat" /></div>

 </section>

</main>
<section className='h-[100vh] w-[90vw] m-auto bg-amber-100 grid grid-cols-4 gap-4 grid-rows-3'>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>
<div className=" bg-red-400"></div>

</section>

</>  )
}

export default App