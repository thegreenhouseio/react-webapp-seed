import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export default class Home extends React.Component<{}, {}> {

  render() {
    return <h1>It Works!</h1>;
  }

}