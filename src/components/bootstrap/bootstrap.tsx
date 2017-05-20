import * as React from 'react';

export default class Bootstrap extends React.Component<{}, {}> {

  render() {
    return  <div>
              {this.props.children}
            </div>;
  }

}