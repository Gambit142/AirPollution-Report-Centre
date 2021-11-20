import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { fetchPollutantApi } from './fetchApi';

const CountryElement = () => {
  const [pollutionData, setPollutionData] = useState(null);
  const location = useLocation();
  const APIKEY = '8fbadde895ad48d207382a06c22ef535';
  const APIURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.state?.lat}&lon=${location.state?.long}&appid=${APIKEY}`;
  useEffect(async () => {
    const data = await fetchPollutantApi(APIURL);
    setPollutionData(data.list[0].components);
  }, []);

  if (!pollutionData) return <h1 data-testid="Loading">Loading...</h1>;
  return (
    <>
      <nav className="country-navbar">
        <Link to="/">
          <div className="back-arrow">
            <RiDeleteBack2Fill />
          </div>
        </Link>
        <span>Country&apos;s Details</span>
        <FiSettings className="settings-icon" />
      </nav>
      <div className="headline country-headline">
        <div>
          <img className="country-image" src={location.state.flag} alt={`${location.state.country}'s Flag`} />
          <div className="per-detail">
            <span className="country-name">{location.state.country}</span>
            <span>
              Lat:
              {' '}
              {location.state.lat}
            </span>
            <span>
              Long:
              {' '}
              {location.state.long}
            </span>
          </div>
        </div>
      </div>
      <div className="total-population country-population">Pollutant Data:</div>
      <div className="gas-details">
        <div className="pollutant-div">
          <span>Carbon Monoxide:</span>
          <span>{pollutionData.co}</span>
        </div>
        <div className="pollutant-div">
          <span>Nitrogen Monoxide (NO):</span>
          <span>{pollutionData.no}</span>
        </div>
        <div className="pollutant-div">
          <span>
            Nitrogen Dioxide (NO
            <sub>2</sub>
            ):
          </span>
          <span>{pollutionData.no2}</span>
        </div>
        <div className="pollutant-div">
          <span>
            Ozone (O
            <sub>3</sub>
            ):
          </span>
          <span>{pollutionData.o3}</span>
        </div>
        <div className="pollutant-div">
          <span>
            Sulphur Dioxide (SO
            <sub>2</sub>
            ):
          </span>
          <span>{pollutionData.so2}</span>
        </div>
        <div className="pollutant-div">
          <span>
            Particulate Matter 2.5(PM
            <sub>2.5</sub>
            ):
          </span>
          <span>{pollutionData.pm2_5}</span>
        </div>
        <div className="pollutant-div">
          <span>
            Particulate Matter 10 (PM
            <sub>10</sub>
            ):
          </span>
          <span>{pollutionData.pm10}</span>
        </div>
        <div className="pollutant-div">
          <span>Ammonia (NH3):</span>
          <span>{pollutionData.nh3}</span>
        </div>
      </div>
    </>
  );
};

export default CountryElement;
