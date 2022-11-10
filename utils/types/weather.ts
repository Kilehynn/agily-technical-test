export type Weather = {
  dt: number
  temp: {
    day: number // Temperature in Celsius
    night: number // Temperature in Celsius
  }
  pressure: number // Pressure in hPa
  wind_speed: number // Wind speed in m/s
  humidity: number // Humidity in %
  weather: {
    icon: string
  } // Weather icon
}
