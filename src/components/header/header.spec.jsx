import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header Component', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header/>);
  });

  it('renders without crashing', () => {
    expect(header.length).toEqual(1);
  });

  it('should render within a footer tag', () => {
    expect(header.find('header').length).toEqual(1);
  });

  it('should render the text correctly', () => {
    expect(header.contains('The Greenhouse')).toEqual(true);
    expect(header.contains('.io')).toEqual(true);
  });

});