import React from 'react'
import './App.css'
import ClockTitle from './ClockTitle'
import { thisTypeAnnotation } from '@babel/types'

class WorldClock extends React.Component {

  constructor(props) {
    super (props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false
    }
    this.timer = setInterval(()=>{
      this.setState((state)=> (
        state.minute === 59 ?
        {hour: state.hour + 1, minute : 0}
        : {minute:state.minute+1}   
      ))
      this.setState((state)=> (
        state.hour === 24 ?
        {hour: 0}
        : {}   
      ))
    },10)
  }

  handlingClick = (event) =>{
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  render(){
    return (
      <div className={'WorldClock'}>
        <h2>도시: {this.props.city}</h2>
        <p>시간: {this.state.hour}시 {this.state.minute}분</p>
        <button value={true} onClick={this.handlingClick}>STOP!</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.CityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17],
      ['부산', 10]
    ]
    this.state = {
      content: ''
    }
  }
  
  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <div className="Board">
          첫 게시글.
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <br/>
        <ClockTitle name = "박민흠"/>
        {this.CityTimeData.map(
          (citytime, index)=>
          <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index}/>
          )
        }
      </div>
    )
  }
}

export default App

