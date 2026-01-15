import React, { useEffect } from 'react'
import { fetchGIF, fetchVideos, unsplash } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setResults } from '../features/searchslice'
import { FcLike } from "react-icons/fc";
import { useState } from 'react';

const Result = () => {

  const[page,setpage]=useState(1)
  const [video, setvideo] = useState(1)
let dispatch=useDispatch()
const{ query,error,activeTab,loading,results }=useSelector((store)=>store.content)

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

    setvideo(video+1)
  }
}

}



const addtocollexction=(item)=>{
 
const olddata=JSON.parse(localStorage.getItem("collection")) || []
let finder=olddata.find((text)=>text.id === item.id
)
if(!finder){
  const newdata=[...olddata,item]

  localStorage.setItem("collection",JSON.stringify(newdata))
}

}

useEffect(()=>{

    
    const getdata=async()=>{
        if(!query) return
        
        try {
            let data=[]
            dispatch(setLoading(true))

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

dispatch(setResults(data));

    
} catch (error) {
  dispatch(setError(error.message || "something went wrong..."))   
}finally{
    dispatch(setLoading(false))

}

    }

getdata()
},[query,dispatch,activeTab,page,video])

console.log(results.photo)

if(loading) return <h1 className='text-center 5xl font-bold'>loading....</h1>
if(error) return <h1 className='text-center 5xl font-bold'>{error}</h1>

if(results.length===0) return <h1 className='h-[50vh] w-full text-5xl font-bold flex items-center justify-center text-white uppercase'>not found</h1>
  return (
      <>
    <div className=' grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] p-6 w-full'>



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

<button className='px-4 py-2 border-none rounded  self-center text-2xl' onClick={()=>addtocollexction(item)}><FcLike /></button>
</div>

</div>
      </div>


        </div>

        )

    })
}


</div>{ activeTab !== "gif"&&

<div className="flex items-center justify-center gap-6 p-7 w-full">
  <button
    onClick={paginationDEC}
    
    className="
      px-5 py-2 rounded-lg font-semibold
      bg-blue-600 text-white
      hover:bg-blue-500
      disabled:opacity-40 disabled:cursor-not-allowed
      transition-all duration-200
    "
  >
    Prev
  </button>

  <span className="text-xl font-bold text-white">
 {activeTab==="photos"?page:video}
  </span>

  <button
    onClick={paginationINC}
    className="
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