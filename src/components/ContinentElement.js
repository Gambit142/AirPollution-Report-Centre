import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchContinent } from '../redux/continent/Continent';

const ContinentElement = () => {
  const dispatch = useDispatch();
  const { continentReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchContinent());
  }, []);
  return (
    <>
      <nav>
        <span>2021</span>
        <span>Continent</span>
      </nav>
      {continentReducer.map(({
        updated,
        countryInfo: {
          _id: id, flag, lat, long,
        }, country,
      }) => (
        <Link
          to={{
            pathname: `/country/${country}`,
            state: {
              long, lat, country, flag,
            },
          }}
          key={id}
        >
          <div>
            <div>{country}</div>
            <img src={flag} alt={`${country}'s Flag`} />
            <div>{Date(updated)}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ContinentElement;
