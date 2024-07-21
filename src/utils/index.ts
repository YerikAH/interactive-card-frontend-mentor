export function formatNumericInput(input: string, limit: number){
  let newInput = ""
  let counter = 1

  for(let i = 0; i< input.length; i++){
    if(!isDigit(input[i])) break
    newInput += input[i]
    if(counter === 4){
      newInput += " "
      counter = 0
    }
    counter++
  }

  return newInput.slice(0,limit)
}

function isDigit(character: string){  
  return !isNaN(Number(character)) && character.trim() !==  ""
}
