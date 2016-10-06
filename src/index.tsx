import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorldComponent } from "./components/hello-world/hello-world";

ReactDOM.render(
  <HelloWorldComponent compiler="TypeScript" framework="React" />,
  document.getElementById("seed-webapp")
);