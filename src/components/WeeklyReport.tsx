import React, { useState } from 'react';
import { format, addDays } from 'date-fns'
import { DayType } from '../types';

const forecastMapping: Record<string, string> = {
  [DayType.SUNNY]: 'sunny-outline',
  [DayType.PARTLY_CLOUDY]: 'partly-sunny-outline',
  [DayType.RAINY]: 'rainy-outline',
  [DayType.SNOW]: 'snow-outline',
  [DayType.THUNDERSTORMS]: 'thunderstorm-outline',
  [DayType.CLOUDY]: 'cloud-outline'
};

const DayReport = (props: any) => {
  const { dayOfWeek, high, low, dayType } = props;
  const getDayTypeName = (dayType: string) => forecastMapping[dayType] ?? '';
  const NO_DATA_SYMBOL = '--';
  
  return (
    <section id="day-report" className="flex flex-column justify-center pv4 tc">
      <span className="f5 pv2 mid-gray">{dayOfWeek}</span>
      <ion-icon name={getDayTypeName(dayType)} size="large" />
      <span className="f4 pt2">{high ?? NO_DATA_SYMBOL}°</span>
      <span className="f6 pt1 pb2 mid-gray">{low ?? NO_DATA_SYMBOL}°</span>
    </section>
  );
}

const WeeklyReport = (props: any) => {
  const { fiveDayForecast = [] } = props?.weatherForecast ?? {};
  let nextDate = new Date();

  let dayReports = [];
  for (let index = 0; index < 5; index++) {
    const { high, low, dayType } = fiveDayForecast[index] ?? {};
    
    nextDate = addDays(nextDate, 1);
    const dayOfWeek = format(nextDate, 'EEE').toUpperCase();
    const dayReport = (
      <DayReport
        key={index}
        dayOfWeek={dayOfWeek}
        high={high}
        low={low}
        dayType={dayType}
      />);
    dayReports.push(dayReport);
  }
  
  return (
    <article id="weekly-report" className="flex justify-center items-center w-100 tc">
      <section className="flex justify-around bb b-black w-90">
        { dayReports }
      </section>
    </article>
  );
};

export default WeeklyReport;
