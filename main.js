function play(userChoice){
    let computerResult = document.getElementById('computerResult')
    let result = document.getElementById('result')

    let choices = ['Rock', 'Paper', 'Scissors']

    let computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log('userChoice: ' + userChoice)
    console.log('computerChoice: ' + computerChoice)

    if(userChoice == computerChoice){
        computerResult.innerHTML = `Computer choice: ${computerChoice}`
        result.innerHTML = 'Its a tie!'
    }
    else if(
        (userChoice == 'Rock' && computerChoice == 'Scissors') ||
        (userChoice == 'Paper' && computerChoice == 'Rock') ||
        (userChoice == 'Scissors' && computerChoice == 'Paper')
    ){
        computerResult.innerHTML = `Computer choice: ${computerChoice}`
        result.innerHTML = 'You Won!'
    }else{
        computerResult.innerHTML = `Computer choice: ${computerChoice}`
        result.innerHTML = 'Computer Won!'
    }
}

