import React from 'react'
import Weather from './Components/Weather'

const App = () => {
  return (
    <div className='app'>
      <Weather></Weather>
    </div>
  )
}

export default App
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 53f7bf0758bedcead753a20bc25110d1
