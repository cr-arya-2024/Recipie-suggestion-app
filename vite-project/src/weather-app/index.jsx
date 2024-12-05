import { useState } from 'react'
import './style.css'
export default function Weather() {
    const [cityName, setCityName] = useState("")
    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function handleClick() {
        try {
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c78387649ce3d741fb5a037d3015495a`)
            const result = await response.json()
            if (result) {
                setData(result)
                console.log(data);
                setLoading(false)

            }
        } catch (e) {
            console.log(e);
            setError(e)
            setLoading(false)
        }
    }

if(loading){
    <div >plz wait for few min</div>
}
    if (error !== null) {
        return <div>
            Got an error!{error}
        </div>
    }

    return (
        <div className="container">
            < div >
                <input type='text' placeholder='Enter City Name' value={cityName} onChange={(e) => setCityName(e.target.value)} />
                <span onClick={handleClick}>Search</span>
            </div>
            <div>
                {
                    data  ?   <div>
                        <h1>{data.name}</h1>
                        <div>
                        <h2>{data.weather[0].main}</h2>
                        <p>{data.weather[0].description}</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around",padding:"0px 40px"}}> <div>
                             <h3>{data.main.humidity}</h3>
                             <p>Humidity</p>
                         </div>
                         <div>
                             <h3>{data.wind.speed}</h3>
                             <p>Wind Speed</p>
                         </div></div>
                    </div>:null
                }

            </div>
        </div>
    )
}