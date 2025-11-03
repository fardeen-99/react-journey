

export function Clearbtn({settask}){


    return(
          
<button className='btn' onClick={()=>{
  return(
  settask([])
  )
}}>clear</button>

    )
}