import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from '../assets/Africa.png';

const ContinentElement = () => {
  const [searchCountry, setSearchCountry] = useState('');
  const { continentReducer } = useSelector((state) => state);
  if (!continentReducer) return <h1>Loading</h1>;
  const filteredCountries = continentReducer.filter((c) => c.country.includes(searchCountry));
  const totalPopulation = !continentReducer ? 0 : continentReducer.reduce((total, item) => ({
    population: total.population + item.population,
  }), { population: 0 });

  return (
    <>
      <nav className="continent-navbar">
        <span>2021</span>
        <span>Continent</span>
        <FiSettings className="settings-icon" />
      </nav>
      <div className="headline">
        <div>
          <img className="africa" src={logo} alt="Map of Africa" />
          <div className="african-details">
            <span data-testid="map-item-continent">Africa</span>
            <span>
              {`${continentReducer.length}
               Countries`}
            </span>
          </div>
        </div>
      </div>
      <div className="total-population">{`Total Population: ${totalPopulation.population.toLocaleString()}`}</div>
      <input
        type="text"
        name="search-countries"
        id="search-countires"
        placeholder="Search Country..."
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      <section className="country-container">
        {filteredCountries.map(({
          updated,
          countryInfo: {
            _id: id, flag, lat, long,
          }, country, population,
        }) => (
          <div key={id} className="country-div">
            <Link
              to={{
                pathname: `/country/${country}`,
                state: {
                  long, lat, country, flag,
                },
              }}
            >
              <div className="date">{(new Date(updated)).toDateString()}</div>
              <div className="country-details">
                <img className="flag" src={flag} alt={`${country}'s Flag`} />
                <div>
                  <h2 className="country-name">{country}</h2>
                  <h2 className="population">{population.toLocaleString()}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default ContinentElement;
