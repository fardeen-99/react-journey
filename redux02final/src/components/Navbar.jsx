
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-blue-900 p-3 text-white flex justify-between items-center'>
  <h1 className='text-xl uppercase font-semibold'>multimedia</h1>
<div className='flex lg:gap-4 gap-3'>
<NavLink to='/'   className='lg:px-6 py-3 px-3 rounded bg-zinc-800 capitalize font-semibold'  >search</NavLink>
<NavLink to='/collection'  className='px-6 py-3 rounded bg-zinc-800 capitalize font-semibold'   >collection</NavLink>

    
</div>
    </div>
  )
}

export default Navbar