'use client'
import {useState, useEffect} from 'react'

export default function Home() {
const [search,setSearch] = useState('');


console.log(search)


useEffect(()=>{
  async function fecthWeather(){
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=1f17f8a5fc6834eb37400bad9da828cd&units=metric');
    const data = await res.json()
  }

  fecthWeather()
},[])




  return (
    <div className="container">
      <div className="card">
        <input className='search' type="text" placeholder="search..." value={setSearch}/>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
        <p>Temperature: {data.main.temp} °C</p>
        <p>City: {data.name}</p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Wind Speed: {data.wind.speed} km/h</p>
      </div>
    </div>
    
  );
}
