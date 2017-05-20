import * as React from 'react';

export default class Home extends React.Component<{}, {}> {

  render() {
    return (
      <div className='col-xs-12'>
        <div className='row'>

          <div className='col-xs-2'>
          </div>

          <div className='col-xs-8'>
            <h2 className='welcome-text-heading'>Welcome to The Greenhouse Webapp Seed project!</h2>
            <p className='welcome-text-body'>This is a sample project to demonstrate a basic React
              and Webpack build.</p>
          </div>

          <div className='col-xs-2'>
          </div>

        </div>
      </div>
    );
  }

}