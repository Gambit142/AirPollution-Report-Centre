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
      {continentReducer.map(({
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
            <span>{country}</span>
            <img src={flag} alt={`${country}'s Flag`} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default ContinentElement;
