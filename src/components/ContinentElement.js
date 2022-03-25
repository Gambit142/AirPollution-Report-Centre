import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import Pagination from './Pagination';

const ContinentElement = () => {
  const [searchCountry, setSearchCountry] = useState('');
  const [page, setPage] = useState(0);
  const { continentReducer, worldReducer } = useSelector((state) => state);
  const { continentName } = useParams();

  const { image: logo, name } = worldReducer.find((item) => item.name === continentName);

  const continentsArray = continentReducer.filter((item) => item.continent === continentName);

  if (!continentsArray) return <h1>Loading</h1>;
  const filteredCountries = continentsArray.filter((c) => c.country.includes(searchCountry));

  const totalPopulation = !continentsArray ? 0 : continentsArray.reduce((total, item) => ({
    population: total.population + item.population,
  }), { population: 0 });

  const perPage = 10;
  const tenPages = filteredCountries.slice(page * perPage, (page * perPage) + perPage);

  return (
    <>
      <nav className="continent-navbar">
        <span>2021</span>
        <span>Continent</span>
        <Link to="/">
          <div className="back-arrow">
            <RiDeleteBack2Fill />
          </div>
        </Link>
      </nav>
      <div className="headline">
        <div>
          <img className={`africa ${name.toLowerCase()}`} src={logo} alt={name} />
          <div className="african-details">
            <span className={`${name}-title`} data-testid="map-item-continent">{name}</span>
            <span>
              {`${continentsArray.length}
               Countries`}
            </span>
          </div>
        </div>
      </div>
      <div className="total-population">{`Total Population: ${totalPopulation.population.toLocaleString()}`}</div>
      <input
        type="text"
        name="search-countries"
        id="search-countries"
        placeholder="Search Country"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      <section className="country-container">
        {tenPages.map(({
          updated,
          continent,
          countryInfo: {
            _id: id, flag, lat, long,
          }, country, population,
        }) => (
          <div key={id} className="country-div">
            <Link
              to={{
                pathname: `/country/${country}`,
                state: {
                  long, lat, country, flag, continent,
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
      {tenPages.length !== 0 && (
      <Pagination
        totalPosts={continentsArray.length}
        numberPerPage={perPage}
        onPageChange={setPage}
      />
      )}
    </>
  );
};

export default ContinentElement;
