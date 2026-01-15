
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-blue-900 p-4 text-white flex justify-between items-center'>
  <h1 className='text-2xl capitalize'>multimedia</h1>
<div className='flex gap-4'>
<NavLink to='/'   className='px-6 py-3 rounded bg-zinc-800'  >search</NavLink>
<NavLink to='/collection'  className='px-6 py-3 rounded bg-zinc-800'   >collection</NavLink>

    
</div>
    </div>
  )
}

export default Navbar