import React from 'react';

const Temperature = (props: any) => {
  const { todaysDate, zipCode } = props;
  const { currentTemperature, dayType } = props?.weatherForecast ?? {};
  
  return (
    <article id="temperature" className="flex flex-column items-center justify-center pt4 tc">
      <section className="w-one-third br-100 pa1 ba b-black pointer">
        <div className="br-100 bg-black pa4 white">
          <span className="f-subheadline white">{currentTemperature}</span>
        </div>
      </section>
      <p className="ma0 f3 pt4 pb3">{dayType}</p>
      <p className="ma0 f4 bb b-black w-90 mid-gray pb4">{todaysDate} · {zipCode}</p>
    </article>
  );
};

export default Temperature;
