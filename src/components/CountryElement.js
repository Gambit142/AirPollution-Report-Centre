import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const CountryElement = () => {
  const [pollutionData, setPollutionData] = useState(null);
  const location = useLocation();
  const APIKEY = '8fbadde895ad48d207382a06c22ef535';
  const APIURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.state.lat}&lon=${location.state.long}&appid=${APIKEY}`;
  useEffect(async () => {
    const response = await fetch(APIURL);
    const data = await response.json();
    setPollutionData(data.list[0].components);
  }, []);

  const {
    long, lat, country, flag,
  } = location.state;

  if (!pollutionData) return <h1>Loading...</h1>;
  return (
    <>
      <nav className="country-navbar">
        <Link to="/">
          <div className="back-arrow">
            <RiDeleteBack2Fill />
            <span>Back</span>
          </div>
        </Link>
        <span>Country&apos;s Details</span>
      </nav>
      <div className="headline">
        <div>
          <img src={flag} alt={`${country}'s Flag`} />
          <div className="per-detail">
            <span className="country-name">{country}</span>
            <span>
              Lat:
              {' '}
              {lat}
            </span>
            <span>
              Long:
              {' '}
              {long}
            </span>
          </div>
        </div>
      </div>
      <div>
        <span>Carbon Monoxide:</span>
        {pollutionData.co}
      </div>
      <div>
        <span>Nitrogen Monoxide (NO):</span>
        {pollutionData.no}
      </div>
      <div>
        <span>
          Nitrogen Dioxide (NO
          <sub>2</sub>
          ):
        </span>
        {pollutionData.no2}
      </div>
      <div>
        <span>
          Ozone (O
          <sub>3</sub>
          ):
        </span>
        {pollutionData.o3}
      </div>
      <div>
        <span>
          Sulphur Dioxide (SO
          <sub>2</sub>
          ):
        </span>
        {pollutionData.so2}
      </div>
      <div>
        <span>
          Particulate Matter 2.5(PM
          <sub>2.5</sub>
          ):
        </span>
        {pollutionData.pm2_5}
      </div>
      <div>
        <span>
          Particulate Matter 10 (PM
          <sub>10</sub>
          ):
        </span>
        {pollutionData.pm10}
      </div>
      <div>
        <span>Ammonia (NH3):</span>
        {pollutionData.nh3}
      </div>
    </>
  );
};

export default CountryElement;
