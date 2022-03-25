import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import globe from '../assets/globe.png';

const WorldElement = () => {
  const continentNames = useSelector((state) => state.worldReducer);
  return (
    <>
      <nav className="world-navbar">
        <h4>Air Pollution Report Centre</h4>
      </nav>
      <div className="headline">
        <div>
          <img className="africa" src={globe} alt="world map" />
          <div className="african-details">
            <span className="click">View A</span>
            <span className="continent">Continent</span>
          </div>
        </div>
      </div>
      <section className="world-container">
        {continentNames.map((item) => (
          <div className="world-div" key={item.name}>
            <h2 className="map-name">{item.name}</h2>
            <Link to={`/continent/${item.name}`}>
              <div className={`map-container ${item.name}`}>
                <img className="map" src={item.image} alt={`${item.name}'s Map`} />
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default WorldElement;
