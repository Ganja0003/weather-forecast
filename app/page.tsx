

export default async function Home() {
const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=1f17f8a5fc6834eb37400bad9da828cd&units=metric');
const data = await res.json()

console.log(data)




  return (
    <div className="container">
      <div className="card">
        <input type="text" placeholder="search..."/>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
        <p>{data.main.temp} °C</p>
        <p>{data.name}</p>
        <p>{data.main.humidity} Humidity</p>
        <p>{data.wind.speed} km/h Wind Speed</p>
      </div>
    </div>
    
  );
}
