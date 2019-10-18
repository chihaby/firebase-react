import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount()  {
    database.ref().on('value', (snapshot) => {
      this.setState({data: snapshot.val()})
    })
  }
  render() {
    return (
      <div>{JSON.stringify(this.state.data, null, 2)}</div>
    )
  }

}

export default App;
