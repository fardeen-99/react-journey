export const MovieApi=async()=>{

try {
    
let fet= await fetch("https://api.tvmaze.com/search/shows?q=batman")
let res= await fet.json()
return res


} catch (error) {
    console.log(error)
}

}