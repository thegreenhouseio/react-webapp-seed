import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer Component', () => {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer/>);
  });

  it('renders without crashing', () => {
    expect(footer.length).toEqual(1);
  });

  it('should render within a footer tag', () => {
    expect(footer.find('footer').length).toEqual(1);
  });

  it('should render the text correctly', () => {
    const copyright = '2014 - ' + new Date().getFullYear();

    expect(footer.contains(copyright)).toEqual(true);
    expect(footer.contains('The Greenhouse')).toEqual(true);
  });

});