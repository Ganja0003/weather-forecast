

export default async function Home() {
const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=1f17f8a5fc6834eb37400bad9da828cd&units=metric');
const data = await res.json()

console.log(data)




  return (
    <div className="container">
      <div className="card">
        <input className='search' type="text" placeholder="search..."/>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
        <p>Temperature: {data.main.temp} °C</p>
        <p>City: {data.name}</p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Wind Speed: {data.wind.speed} km/h</p>
      </div>
    </div>
    
  );
}
