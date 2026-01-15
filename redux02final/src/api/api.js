

import axios from "axios";


const unsplash_key=import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY



export const unsplash=async(query,per_page,page)=>{

 const res=await axios.get("https://api.unsplash.com/search/photos",{
params:{query,per_page,page},
headers:{Authorization:`Client-ID ${unsplash_key}`}
})
 return res.data
}

export async function fetchVideos(query,per_page,page) {
  const res = await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page,page},
    headers:{Authorization:PEXELS_KEY}
  })
  return res.data
}

export async function fetchGIF(query,limit=30) {
  const res = await axios.get('https://tenor.googleapis.com/v2/search',{
    params:{q:query,key:TENOR_KEY,limit},
  })
  return res
}


