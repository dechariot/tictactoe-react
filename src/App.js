import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares: ['','','','','','','','',''],
      nextPlayer: false
    }
  }

  setParentsState = (obj) =>{
    this.setState(obj);
  }



  render() {
    return (
      <div className="container" style={{display:'flex',justifyContent:'center'}}>
        <Board { ...this.state} setParentsState={this.setParentsState}/>
      </div>
    );
  }
}

