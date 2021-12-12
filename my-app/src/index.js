import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
    total: 50,
    lowerbody: 20,
    upperBody: 10,
    cardio: 20,
    goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calculateGoalProgress = (total, goal) => {
  return getPercent(total /goal)
}

const ExcerciseDayCounter = ({total, lowerBody, upperBody, cardio, goal}) => {
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
            <p> Upper Body Days: {cardio} </p>
        </div>
        <div>
            <p> Goal Progress: {calculateGoalProgress(total,goal)} </p>
        </div>
      </section>
    )
}

render(
   <ExcerciseDayCounter
   total = {exerciseData.total}
   lowerBody = {exerciseData.lowerbody}
   upperBody = {exerciseData.upperBody} 
   cardio = {exerciseData.cardio}
   goal = {exerciseData.goal}/>
  ,
  document.getElementById('root')
)
