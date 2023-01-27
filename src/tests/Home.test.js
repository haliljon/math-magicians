import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
