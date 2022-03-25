import Africa from '../../assets/Africa.png';
import Europe from '../../assets/europe.png';
import Asia from '../../assets/asia.png';
import SouthAmerica from '../../assets/southamerica.png';
import NorthAmerica from '../../assets/northamerica.png';
import Australia from '../../assets/australia2.png';

const initialState = [
  {
    name: 'Africa',
    image: Africa,
  },
  {
    name: 'Europe',
    image: Europe,
  },
  {
    name: 'Asia',
    image: Asia,
  },
  {
    name: 'South America',
    image: SouthAmerica,
  },
  {
    name: 'North America',
    image: NorthAmerica,
  },
  {
    name: 'Australia-Oceania',
    image: Australia,
  },
];

const worldReducer = (state = initialState) => state;

export default worldReducer;
