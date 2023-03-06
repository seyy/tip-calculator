
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let people = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

  const bill = Number(billInput.value)
  const tipPercentage = Number(tipInput.value) / 100 
  const tipAmount = bill * tipPercentage
  const total = tipAmount + bill
  const perPersonTotal = total / people
  
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}

const increasePeople = () => {
    people += 1
    numberOfPeopleDiv.innerText = people
    calculateBill()
}

const decreasePeople = () => {
      if(people < 1) {
        return
      }
    people -= 1
  
    numberOfPeopleDiv.innerText = people
  
    calculateBill()
}
