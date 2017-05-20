import * as React from 'react';
import { Link } from 'react-router';
import './navigation.scss';

export default class Navigation extends React.Component<{}, {}> {

  render() {
    return (
      <nav className='navigation'>
        <ul role='nav'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    );
  }

}