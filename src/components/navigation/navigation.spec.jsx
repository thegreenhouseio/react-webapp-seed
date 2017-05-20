import * as React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import Navigation from './navigation';

describe('Navigation Component', () => {
  let navigation;

  beforeEach(() => {
    navigation = shallow(<Navigation/>);
  });

  it('renders without crashing', () => {
    expect(navigation.length).toEqual(1);
  });

  it('should render within a nav tag and two links', () => {
    expect(navigation.find('nav').length).toEqual(1);
    expect(navigation.find('li').length).toEqual(2);
  });

  it('should render the home link correctly', () => {
    const link = <li><Link to="/home">Home</Link></li>;

    expect(navigation.contains(link)).toEqual(true);
  });

  it('should render the about link correctly', () => {
    const link = <li><Link to="/about">About</Link></li>;

    expect(navigation.contains(link)).toEqual(true);
  });

});