let weeklyExpenses = 100
let monthlyExpenses = 400
let annualExpenses = 4800



window.prompt(weeklyExpenseQuestions[0])

let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)

let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)


for(i = 0;   i < weeklyExpenseQuestions.lenght;  i++           )

{
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
    weeklyExpenses = weeklyExpenses + answer
}



// Your Code Here