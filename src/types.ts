export enum DayType {
  SUNNY = 'Sunny',
  PARTLY_CLOUDY = 'Partly cloudy',
  CLOUDY = 'Cloudy',
  RAINY = 'Rainy',
  THUNDERSTORMS = 'Thunderstorms',
  SNOW = 'Snow'
}

export interface DayForecast {
  high: number,
  low: number,
  dayType: DayType
}

export interface WeatherForecast extends DayForecast {
  currentTemperature: number,
  fiveDayForecast: DayForecast[]
}
