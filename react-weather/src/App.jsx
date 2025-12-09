import { useEffect, useState } from "react";
import "./App.css"
const App = () => {
  let [city, setCity] = useState("delhi");
  let [input, setInput] = useState("");
  let [weather, setWeather] = useState(null);
  let [error, setError] = useState("");
  let [back, setback] = useState(null);
 

let change=["https://png.pngtree.com/thumb_back/fh260/background/20230113/pngtree-hd-grassland-rainy-weather-image_1516180.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIs4hwJGjDiE03rFyIfDMNr-yd-DabN0JXw&s"
    ,"https://www.shutterstock.com/image-photo/dreamy-winter-landscape-snow-sun-600nw-2510949637.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbYfHe-Z6inTpWaDij3uabkT6hmRsUewZ6Q&s"
    ,"https://wallpapers.com/images/hd/fine-weather-landscape-iq9k6ubn8w9yhhkc.jpg"] 
    
    
    const changer=()=>{
  let arr=Math.floor(Math.random()*change.length)
  setback(change[arr])
}
    // MAIN API (works only when city is valid)
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf0f705f7511097aacae70722e7ff9ff&units=metric`;

  const fetchWeather = async () => {
    let res = await fetch(api);
    let data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  // 🔥 SUBMIT — first validate without updating UI
  const submit = async (e) => {
    e.preventDefault();

    let newCity = input.toLowerCase();

    if (!newCity.trim()) return;

    // VALIDATION API
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=cf0f705f7511097aacae70722e7ff9ff&units=metric`;

    let res = await fetch(url);
    let data = await res.json();

    // ❌ GALAT CITY → UI SAME RAHEGI
    if (data.cod === "404") {
      setError("City does not exist ❌");
      setInput("");
      return; // IMPORTANT → city state change NA ho
    }

    // ✔ SAHI CITY → UI update ho
    setError("");
    setCity(newCity);
    setInput("");
  };
useEffect(() => {
  if (back) {
    document.body.style.backgroundImage = `url(${back})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.minHeight = "100vh";
    document.body.style.width = "100%";
  }
}, [back]);
  return (
   <main
  // style={
  //   back
  //     ? {
  //         backgroundImage: `url(${back})`,
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //         backgroundRepeat: "no-repeat",
  //         minHeight: "100vh",
  //         minwidth:"100vw"
  //       }
  //     : { minHeight: "100vh" }
  // }
>
      <form onSubmit={submit}>
        <div className="box">

          <div className="search">
            <input
              type="text"
              placeholder="search your city"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={changer}>change</button>
          </div>

          {/* 🔥 ERROR ONLY — UI SAME */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* OLD UI remains unless city is valid */}
          {weather && weather.main && (
            <>
              <h2>{weather.name}</h2>
              <p>{new Date().toDateString()}</p>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />

              <h1>{weather.main.temp}°C</h1>

              <div className="min-max">
                <p>min: {weather.main.temp_min}°C</p>
                <p>max: {weather.main.temp_max}°C</p>
              </div>

              <div className="grid">
                <div className="andar">Feels: {weather.main.feels_like}°C</div>
                <div className="andar">Humidity: {weather.main.humidity}%</div>
                <div className="andar">Wind: {weather.wind.speed} km/h</div>
                <div className="andar">Pressure: {weather.main.pressure}</div>
              </div>
            </>
          )}

        </div>
      </form>
    </main>
  );
};

export default App;
