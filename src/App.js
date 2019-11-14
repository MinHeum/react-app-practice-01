import React from 'react'
import './App.css'
import ClockTitle from './ClockTitle'

class WorldClock extends React.Component {

  constructor(props) {
    super (props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false
    }
    console.log("  Clock   )생성자")
  }

  handlingClick = (event) =>{
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  componentDidMount() {
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
    },5000)
    console.log("  Clock   )마운트되었습니다.")
  }

  componentDidUpdate() {
    console.log("  Clock   )업데이트.")
  }

  componentWillUnmount() {
    console.log("  Clock   )언마운트.")
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
      content: '',
      show: true
    }
    console.log("App   )생성자")
  }
  
  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }
  
  handlingClick = (event) => {
    this.setState((prevState)=>({show: !this.state.show}))
  }

  componentDidMount() {
    console.log("App   )마운트되었습니다.")
  }

  componentDidUpdate() {
    console.log("App   )업데이트.")
  }

  render(){
    console.log("App   )렌더링")
    return (
      <div className="App">
        <div className="Board">
          첫 게시글.
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <br/>
        <ClockTitle name = "박민흠"/>
        <button onClick={this.handlingClick}>손가락 튕기기</button>
        {this.state.show &&
        this.CityTimeData.map(
          (citytime, index)=>
          <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index}/>
          )
        }
      </div>
    )
  }
}

export default App

