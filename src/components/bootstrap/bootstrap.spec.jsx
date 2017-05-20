import * as React from 'react';
import { mount } from 'enzyme';
import Bootstrap from './bootstrap';

describe('Bootstrap Component', () => {
  let bootstrap;

  beforeEach(() => {
    bootstrap = mount(<Bootstrap/>);
  });

  it('renders without crashing', () => {
    expect(bootstrap.length).toEqual(1);
  });

  it('should render with a header component', () => {
    expect(bootstrap.find('header').length).toEqual(1);
  });

  it('should render with a footer component', () => {
    expect(bootstrap.find('footer').length).toEqual(1);
  });

  xit('should render with a home view', () => {
    expect(bootstrap.find('#home').length).toEqual(1);
  });

});