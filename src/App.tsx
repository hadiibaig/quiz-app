import React, { useState } from 'react';
import './App.css';

import { apifunc } from './services'
import { Quizes } from './types'
import Card from './components/Card'

function App() {
  const [quiz, setquiz] = useState<Quizes[]>([])
  let [step, setstep] = useState(0)
  let [score, setscore] = useState(0)
  let [result , setresult] = useState(false)
  React.useEffect(() => {
    async function fetchData() {
      const questions: Quizes[] = await apifunc(5, "easy")
      setquiz(questions)
    }
    fetchData()
  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault()
    console.log(userAns)
    if (userAns === quiz[step].answer){
      setscore(++score);
    }
    if (step !== quiz.length - 1) {
      setstep(++step)
    }
    else {
      setresult(true)
    }
  }
  
  if (!quiz.length) {
    return <h2> Wait ...</h2>
  }
  if(result){ 
    return ( <div>
    <div id="result-container">
    <h1>Quiz Completed</h1>
    <hr/>
    <h3>Your Score is {score}</h3>
  </div>
  <div>
    <button id="res-button" onClick={() => { 
      setresult(false)
      setstep(0)
    }}> Restart Quiz </button>
  </div>
  </div>
  ) } 
  return (
    <div className="title">
      <h1>Quiz App</h1>
      <Card option={quiz[step].option} question={quiz[step].question} callbackFunc={handleSubmit} />
    </div>
  )
}

export default App;
