import { QuestionsTypes, Quizes } from './types'

const shuffle = (arr: any[]) => {
    return [...arr].sort(() => Math.random() - 0.5)
}
export async function apifunc(numberOfQuiz: number, difficulty: string): Promise<Quizes[]> {
    const { results } = await (await fetch(`https://opentdb.com/api.php?amount=${numberOfQuiz}&difficulty=${difficulty}&type=multiple`)).json();
    const quiz : Quizes[] =  results.map((val: QuestionsTypes) => {
        return {
            question: val.question,
            answer: val.correct_answer,
            option: shuffle(val.incorrect_answers.concat(val.correct_answer))
        }
    })
    return quiz
}