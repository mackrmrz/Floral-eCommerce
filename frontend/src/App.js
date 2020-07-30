import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import NavBar from "./component/navbar";
import ShowProducts from "./component/productRunway";

class App extends Component {
  render(){
    return (
      <div className="App col-6">
        <NavBar />
        <ShowProducts/>
        {/* {...this.props.children} */}
      </div>
    );
  }
}

export default App;
