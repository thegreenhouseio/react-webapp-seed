import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class HelloWorldComponent extends React.Component<HelloProps, {}> {

  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }

}