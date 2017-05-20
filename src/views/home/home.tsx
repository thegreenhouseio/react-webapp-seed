import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class HomeViewComponent extends React.Component<{}, {}> {

  render() {
    return <h1>It Works!</h1>;
  }

}