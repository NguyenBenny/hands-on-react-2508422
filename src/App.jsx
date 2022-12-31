import React, {Component} from "react";

class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Meet the {this.props.name}</h1>;
  }
}

const Welcome2 = (props) => {
  return <h1>Meet the {props.name} 2</h1>
}

function App() {
  return (
    <hgroup>
      <Welcome2 name="Stars"/>
      <p>
        Members of an <b>intergalactic alliance</b> paving the way for peace and
        benevolence among all species. They are known for their enthusiasm for
        science, for their love of fun, and their dedication to education.
      </p>
      <button className="outline" onClick={() => alert("Clicked !")}>
        Click me!
      </button>
    </hgroup>
  );
}
export default App 
