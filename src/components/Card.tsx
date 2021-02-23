import React from "react"
import { propsType } from './../types'

import './../App.css'

const Card: React.FC<propsType> = ({ question, option , callbackFunc}) => {
    let [qIndex , setqIndex] = React.useState(1)
    const [inputvalue , setinputvalue] = React.useState("")
    const getAnswer = (e: any) => {
        setinputvalue(e.target.value)
        }
    return (<div id="card">
       <span> {qIndex}. {question} </span>
       <br/>
        <hr/>
        <div>
            <form onSubmit={(e: React.FormEvent<EventTarget> ) => {callbackFunc(e , inputvalue)}}>
                {option.map((val: string, ind: number) => {
                    return (
                        <div key={ind} id="options">
                            <label>
                                <input type="radio" required value={val} name="val" checked={ inputvalue === val } onChange={getAnswer}/>
                                {val}
                            </label>
                        </div>)
                })}
                <input type="submit" onClick={() =>  inputvalue? setqIndex(++qIndex) : qIndex}/>
            </form>
        </div>
    </div >)
}

export default Card
