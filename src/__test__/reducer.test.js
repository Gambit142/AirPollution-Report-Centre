import continentReducer, { FETCH_CONTINENT } from '../redux/continent/Continent';

describe('Reducer function test', () => {
  it('Test if the reducer functions properly', () => {
    const testArray = ['Angola', 'Nigeria', 'Kenya'];
    const result = continentReducer(undefined, { type: FETCH_CONTINENT, continentData: testArray });
    expect(result[0]).toBe('Angola');
    expect(result[1]).toBe('Nigeria');
    expect(result[2]).toBe('Kenya');
  });
});
