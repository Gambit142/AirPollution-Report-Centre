import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/Africa.png';

const ContinentElement = () => {
  const { continentReducer } = useSelector((state) => state);
  if (!continentReducer) return <h1>Loading</h1>;
  const totalPopulation = !continentReducer ? 0 : continentReducer.reduce((total, item) => ({
    population: total.population + item.population,
  }), { population: 0 });

  return (
    <>
      <nav className="continent-navbar">
        <span>2021</span>
        <span>Continent</span>
      </nav>
      <div className="headline">
        <div>
          <img className="africa" src={logo} alt="Map of Africa" />
          <div className="african-details">
            <span>Africa</span>
            <span>
              {`${continentReducer.length}
               Countries`}
            </span>
          </div>
        </div>
      </div>
      <div className="total-population">{`Total Population: ${totalPopulation.population.toLocaleString()}`}</div>
      <section className="country-container">
        {continentReducer.map(({
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
                <h2 className="country-name">{country}</h2>
                <h2 className="population">{population.toLocaleString()}</h2>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default ContinentElement;
