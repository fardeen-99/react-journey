import { useEffect, useState } from "react"
// import { Getapi } from "../axios"
import { Atom } from "react-loading-indicators"
import { useNavigate } from "react-router-dom"
import { getCountryData } from "../axios"

export const Country = () => {
  const [country, setcountry] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setsearch] = useState("")
  const [filter, setfilter] = useState("All")
  const navu = useNavigate()

  useEffect(() => {
    const popat = async () => {
      try {
        const res = await getCountryData();
        console.log("api data:"+res.data);
        
        setcountry(res.data)
      } catch (err) {
        console.error("API Error:", err)
      } finally {
        setLoading(false)
      }
    }

    popat()
  }, [])

  if (loading) {
    return (
      <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
        <Atom color="#32cd32" size="medium" />
      </div>
    )
  }

  const searchu = country.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const filteru = searchu.filter((item) =>
    filter === "All" ? true : item.region === filter
  )

  const handlenum = (value) => {
    setcountry((prev) =>
      [...prev].sort((a, b) => {
        if (value === "asc") return a.name.common.localeCompare(b.name.common)
        if (value === "desc") return b.name.common.localeCompare(a.name.common)
      })
    )
  }

  return (
    <>
      <div className="akhir">
        <input
          className="motu"
          type="text"
          placeholder="search.."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <button className="gazi" onClick={() => handlenum("asc")}>
          ascending
        </button>
        <button className="gazi" onClick={() => handlenum("desc")}>
          descending
        </button>

        <select value={filter} onChange={(e) => setfilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="cover">
        {filteru.map((ele) => (
          <div className="olo" key={ele.name.common}>
            <div className="image">
              <img src={ele.flags.svg} alt="" />
            </div>
            <h2 style={{ textTransform: "uppercase", color: "wheat" }}>
              {ele.name.common.length > 10
                ? ele.name.common.slice(0, 10) + "..."
                : ele.name.common}
            </h2>
            <p>population: {ele.population.toLocaleString()}</p>
            <p>region: {ele.region}</p>
            <p>capital: {ele.capital?.[0] || "na"}</p>

            <button
              className="btn-b"
              onClick={() => navu(`/country/${ele.name.common}`)}
            >
              read more
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
