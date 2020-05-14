import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form';


// Endpoint!
const API = "http://localhost:3000/sushis"

// created_at: "2018-07-27T18:53:16.241Z"
// id: 1
// img_url: "./sushi/maguro.png"
// name: "Maguro Magic"
// price: 20

class App extends Component {

  state={
    sushi:[],
    startIndex: 0,
    money:100
  }
  
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        let sushis = resp.map(sushi => {
          sushi.eaten = false
          return sushi
        })
        this.setState({sushi: sushis})
      })
  }

  onMore=()=> {
    this.setState((prevState)=>{
      return {startIndex: prevState.startIndex+4 >99? 0 : prevState.startIndex+4}
    }
      )
  }

  onEat=(id)=>{
    this.setState((prevState)=> {
      let newMoney=prevState.money
      let newState= prevState.sushi.map(thisSushi=> {
        if (thisSushi.id===id){
          if (prevState.money>=thisSushi.price){
            thisSushi.eaten=true 
            newMoney=prevState.money-thisSushi.price
          }
        }
        return thisSushi
      })
      return {sushi: newState, money: newMoney}
    })
  }

  countEaten=()=>{
    return this.state.sushi.reduce((sum, num)=> {
      if (num.eaten){
      sum++
      }
      return sum
    },0)
  }

  addMoney=(value)=> {
    this.setState((prevState)=>{
      return {money: prevState.money+parseInt(value)}
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onEat={this.onEat} onMore={this.onMore} sushis={this.state.sushi.slice(this.state.startIndex,this.state.startIndex+4)}/>
        <Table money={this.state.money} plates={this.countEaten()}/>
        <Form addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;

// 