import * as React from 'react';
import Footer from '../foooter/footer';
import Header from '../header/header';

export default class Bootstrap extends React.Component<{}, {}> {

  render() {
    return (
      <div className='container'>

        <section className='row'>
          <Header/>
        </section>

        <section className='rows'>
          { this.props.children }
        </section>

        <section className='row'>
          <Footer/>
        </section>

      </div>
    );
  }

}