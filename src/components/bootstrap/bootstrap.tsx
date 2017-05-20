import * as React from 'react';

export class BootstrapComponent extends React.Component<{}, {}> {

  render() {
    return  <div>
              <h1>It Works!</h1>
              {this.props.children}
            </div>;
  }

}