import * as React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigation from '../navigation/navigation';

export default class Bootstrap extends React.Component<{}, {}> {

  render() {
    return (
      <div className='container'>

        <section className='row'>
          <Header/>
        </section>

        <section className='row'>
          <Navigation/>
        </section>

        <section className='row'>
          { this.props.children }
        </section>

        <section className='row'>
          <Footer/>
        </section>

      </div>
    );
  }

}