import { useLoaderData, useNavigate } from "react-router-dom"


export const Movie = () => {
  let load = useLoaderData()
  let navi = useNavigate()

  return (
    <div className="movies-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="title-accent">NOW</span> SHOWING
        </h1>
        <p className="page-subtitle">{load.length} titles available</p>
      </div>

      <ul className="movies-grid">
        {load.map((ele, index) => (
          <li key={ele.show.id} className="movie-item" style={{ "--i": index }}>
            <div className="movie-card" onClick={() => navi(`/movie/${ele.show.id}`)}>
              <div className="card-glow" />
              <div className="card-image-wrap">
                <img
                  src={ele.show.image?.medium}
                  alt={ele.show.name}
                  className="card-img"
                />
                <div className="card-overlay" />
                <div className="card-shine" />
              </div>

              <div className="card-content">
                <h3 className="card-title">{ele.show.name}</h3>
                {ele.show.genres?.length > 0 && (
                  <div className="card-genres">
                    {ele.show.genres.slice(0, 2).map((g) => (
                      <span key={g} className="genre-tag">{g}</span>
                    ))}
                  </div>
                )}
                <button className="watch-btn">
                  <span className="btn-icon">▶</span>
                  <span>Watch Now</span>
                </button>
              </div>

              <div className="card-corner top-left" />
              <div className="card-corner top-right" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}