export interface QuizzInterface{
    quizzQuestion:Question[],
    openInternPositionID:number
}

export interface Question{
    question:string,
    answer1:string,
    answer2:string,
    answer3:string,
    answer4:string,
    correctAnswerIndex:number
}