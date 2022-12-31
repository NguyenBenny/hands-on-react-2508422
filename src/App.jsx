import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";

function App() {
  return (
    <hgroup>
      <Welcome name="Stars" />
      <p>
        Members of an <b>intergalactic alliance</b> paving the way for peace and
        benevolence among all species. They are known for their enthusiasm for
        science, for their love of fun, and their dedication to education.
      </p>
      <Support/>
    </hgroup>
  );
}
export default App;
