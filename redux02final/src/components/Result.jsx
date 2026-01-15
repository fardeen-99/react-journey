import React, { useEffect } from 'react'
import { fetchGIF, fetchVideos, unsplash } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setResults } from '../features/searchslice'

const Result = () => {
let dispatch=useDispatch()
const{ query,error,activeTab,loading,results }=useSelector((store)=>store.content)

// console.log(query);



useEffect(()=>{

    
    const getdata=async()=>{
        if(!query) return
        
        try {
            let data=[]
            dispatch(setLoading(true))

if (activeTab === "photos") {
  const res = await unsplash(query);
  data = res.results.map((item) => ({
    id: item.id,
    title: item.alt_description,
    type: "photos",
    thumbnail: item.urls.small,
   src: item.urls.regular || item.urls.small,

    url: item.links.html
  }));

} else if (activeTab === "videos") {
  const response = await fetchVideos(query);
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
},[query,dispatch,activeTab])

console.log(results.photo)

if(loading) return <h1 className='text-center 5xl font-bold'>loading....</h1>
if(error) return <h1 className='text-center 5xl font-bold'>{error}</h1>

if(results.length===0) return <h1 className='h-[50vh] w-full text-5xl font-bold flex items-center justify-center text-white uppercase'>not found</h1>
  return (
    <div className='flex-1 flex flex-wrap p-8 gap-6 justify-center'>



{
    results && results.map((item)=>{
        return(
        <div key={item.id}>
        
      <div className='h-[250px] w-[200px]  rounded overflow-hidden relative' >
<a href={item.url}>
     {item.type==="photos"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}
     {item.type==="video"?<video preload='metadata' className='h-full w-full object-cover object-center' src={item.src} muted autoPlay loop ></video>:""}
     {item.type==="gif"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}

</a>

<div className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white' id='bottom'>

<h2 className='text-lg font-semibold capitalize h-14 overflow-hidden' >{item.title}</h2>
</div>
      </div>


        </div>

        )

    })
}
 
    </div>
  )
}

export default Result