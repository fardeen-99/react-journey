import React, { useEffect} from 'react'
import { fetchGIF, fetchVideos, unsplash } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs, setError, setLoading, setResults } from '../features/searchslice'
import { FcLike } from "react-icons/fc";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { addcollection } from '../features/collectionslice';
import { useQuery } from '@tanstack/react-query';
import {Atom} from 'react-loading-indicators' 
import { useNavigate } from 'react-router-dom';

const Result = ({tabref}) => {
const navu=useNavigate()
  const[page,setpage]=useState(1)
  const [video, setvideo] = useState(1)
let dispatch=useDispatch()
const{ query,activeTab }=useSelector((store)=>store.content)

// console.log(query);
const paginationINC=()=>{

if(activeTab==="photos"){
  setpage(page+1)
}if(activeTab==="videos"){
  setvideo(video+1)
}

}

const paginationDEC=()=>{
if(activeTab==="photos"){
  if(page>1){
    setpage(page-1)

  }

}if(activeTab==="videos"){
  if(video>1){

    setvideo(video-1)
  }
}

}



const addtocollexction=(item)=>{
toast.success('Successfully toasted!')
dispatch(addcollection(item))
}
    const getdata=async()=>{
        if(!query) return
        
        try {
            let data=[]
      

if (activeTab === "photos") {
  const res = await unsplash(query,30,page);
  data = res.results.map((item) => ({
    id: item.id,
    title: item.alt_description,
    type: "photos",
    thumbnail: item.urls.small,
   src: item.urls.regular || item.urls.small,

    url: item.links.html
  }));

} else if (activeTab === "videos") {
  const response = await fetchVideos(query,30,video);
  data = response.videos.map((item) => ({
    id: item.id,
    type: "video",
    title: item.user.name || "video",
    thumbnail: item.image,
    src: item.video_files[0].link,
    url: item.url
  }));

} else if (activeTab === "gif") {
  const response = await fetchGIF(query);
  data = response.data.results.map((item) => ({
    id: item.id,
    title: item.title || "GIF",
    type: "gif",
    thumbnail: item.media_formats.tinygif.url,
    src: item.media_formats.gif.url,
    url: item.url
  }));
}

return data

    
} catch (error) {
  throw error
}

    }


const {
  data: results = [],
  isLoading,
  isError,
  error
} =useQuery({
  queryKey:["search",{query,activeTab,page,video}],
  queryFn:getdata,
  enabled:!!query,
  staleTime:Infinity,
  gcTime:Infinity

})

useEffect(()=>{
 tabref.current?.scrollIntoView({ behavior: "smooth" });
},[video,page])


if(isLoading) return <div className='h-[50dvh] w-full flex items-center justify-center'><Atom color="#32cd32" size="medium" text="" textColor=""  /></div>
if (isError)
  return (
    <h1 className="text-center text-2xl font-bold text-red-500">
      {error?.message || "Something went wrong"}
    </h1>
  );
if(results.length===0) return(
  <>
   <h1 className='h-[50vh] break-all p-6 w-full text-lg font-bold flex items-center justify-center text-white capitalize'>not found : {query}</h1>
   <div className='flex w-full gap-6 justify-center'>
<button className='px-6 py-3 bg-emerald-900 capitalize rounded text-white font-semibold' onClick={()=>navu(dispatch(setActiveTabs("videos")))}>go to videos</button>
<button className='px-6 py-3 bg-emerald-900 capitalize rounded text-white font-semibold' onClick={()=>navu(dispatch(setActiveTabs("gif")))}>go to gif</button>

   </div>
  </>

)
  return (
      <>
      <div><Toaster
  position="top-right"
  reverseOrder={false}
/>

</div>
<div

  className="
    grid gap-6 p-6 w-full
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
  "
>



{
    results && results.map((item)=>{
      return(
        <div key={item.id}>
        
      <div className='h-[250px] w-full  rounded overflow-hidden relative self-start' >
        
<a href={item.url}>
     {item.type==="photos"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}
     {item.type==="video"?<video preload='metadata' className='h-full w-full object-cover object-center' src={item.src} muted autoPlay loop ></video>:""}
     {item.type==="gif"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}

</a>

<div className=' w-full px-4 py-3 absolute bottom-0 text-white' id='bottom'>
<div className='flex justify-between gap-3  items-center'>

<h2 className=' font-semibold capitalize overflow-hidden flex items-center h-14  hover:h-full transition ease-linear duration-300  text-white ' >{item.title}</h2>

<button className='px-4 py-2 border-none rounded  self-center text-2xl' onClick={() => {
  addtocollexction(item)

}}><FcLike /></button>
</div>

</div>
      </div>


        </div>

        )

    })
}


</div>{ activeTab !== "gif"&&

<div className="flex gap-6 p-7 w-[80%] m-auto">
  <button
    onClick={paginationDEC}
    
    className="
      px-5 py-2 rounded-lg font-semibold
      bg-blue-600 text-white w-[100%]
      hover:bg-blue-500
      disabled:opacity-40 disabled:cursor-not-allowed
      transition-all duration-200
    "
  >
    Prev
  </button>

  <span className="text-2xl font-bold text-white">
 {activeTab==="photos"?page:video}
  </span>

  <button
    onClick={paginationINC}
    className=" w-[100%]
      px-5 py-2 rounded-lg font-semibold
      bg-blue-600 text-white
      hover:bg-blue-500
      transition-all duration-200
    "
  >
    Next
  </button>
</div>
}
</>
  )
}

export default Result