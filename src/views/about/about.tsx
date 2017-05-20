import * as React from 'react';

export default class About extends React.Component<{}, {}> {

  render() {
    return (
      <div id='home' className='col-xs-12'>
        <div className='row'>

          <div className='col-xs-2'>
          </div>

          <div className='col-xs-8'>
            <p className='welcome-text-body'>The Greenhouse is a developer platform for open source
              projects looking to get hosted, developed and incubated.  Run by Owen Buckley, who
              brings a passion to the development process in the realization of an idea as a package
              of connected information, turned into a meaningful product.  With knowledge and
              experience in all stages of the development lifecycle (in particular for front-end
              applications) as well as consulting, presenting at conferences and Meetups, advising
              on technical and business strategy, and being active in Open Source, the Greenhouse
              is a head in the clouds.</p>
          </div>

          <div className='col-xs-2'>
          </div>

        </div>
      </div>
    );
  }

}