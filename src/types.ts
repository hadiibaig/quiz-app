import React from 'react'


export type QuestionsTypes = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quizes = {
    question : string 
    answer : string
    option : string[]
}

export type propsType = {
    question : string
    option : string[]
    callbackFunc : (e : React.FormEvent<EventTarget> , answer: string) => void
}