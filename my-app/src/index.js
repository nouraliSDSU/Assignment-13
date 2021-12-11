import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
    total: 50,
    lowerbody: 20,
    upperBody: 10,
    goal: 90
}

class ExcerciseDayCounter extends Component{
  render(){
    const {total, lowerBody, upperBody, goal} = this.props
    return(
      <section>
        <div>
            <p> Exercise Days: {total} </p>
        </div>
        <div>
            <p> Lower Body Days: {lowerBody} </p>
        </div>
        <div>
            <p> Upper Body Days: {upperBody} </p>
        </div>
        <div>
            <p> Goal Days: {goal} </p>
        </div>
      </section>
    )
  }
}

render(
   <ExcerciseDayCounter
   total = {exerciseData.total}
   lowerBody = {exerciseData.lowerbody}
   upperBody = {exerciseData.upperBody} 
   goal = {exerciseData.goal}/>
  ,
  document.getElementById('root')
)
