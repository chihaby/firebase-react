import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.dataRef = 'null';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.dataRef = database.ref('/WOW/LOL/hehe');

    database.ref().on('value', snapshot => {
      this.setState({ data: snapshot.val() });
    });
  }

  handleChange = event => {
    const newData = event.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.dataRef.push(this.state.newData);

    // ------METHOD-1-----------------------
    // database
    //   .ref()
    //   .child('AMAZING DATA')
    //   .push(this.state.newData);
    // // .child or .parent are used to navigate up and down the tree
    //---------------------------------------

    // ------METHOD-2------------------------
    // database.ref('AMAZINGNEWDATA/hello/world/this/is/cool')
    //         .push(this.state.newData);
    //----------------------------------------
  };

  render() {
    return (
      <>
        <div>{JSON.stringify(this.state.data, null, 2)}</div>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default App;
