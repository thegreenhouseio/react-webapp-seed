import * as React from 'react';
import './footer.scss';

interface BootstrapStateInterface {
  copyright: string;
}

export default class Footer extends React.Component<{}, BootstrapStateInterface> {

  constructor() {
    super();

    const startingYear = 2014;
    const currentYear = new Date().getFullYear();

    this.state = {
      copyright: `${startingYear} - ${currentYear}`
    };
  }

  render() {
    return (
      <p className='copyright-text'> {this.state.copyright}
        <br/>
        <a href='http://www.thegreenhouseio.blog'>The Greenhouse</a>
      </p>
    );
  }

}