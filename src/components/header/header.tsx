import * as React from 'react';
import './header.scss';

export default class Header extends React.Component<{}, {}> {

  render() {
    return (
      <header className='col-xs-12'>
        <h2 className='hidden-md-up header-text'>The Greenhouse</h2>
        <div className='hidden-sm-down header-banner'></div>
        <p className='io-text'>.io</p>
      </header>
    );
  }

}