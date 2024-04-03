const number = document.getElementById('number')
const increase= document.getElementById('increase')
const decrease = document.getElementById('decrease')

console.log(number)
console.log(increase)
console.log(decrease)

increase.addEventListener('click', () => {
    console.log('increase가 클릭됨')
    const newNumber=parseInt(number.innerText, 10)
    number.innerText=newNumber +1
})

decrease.addEventListener('click', () => {
    console.log('decrease가 클릭됨')
    const newNumber = parseInt(number.innerText, 10)
    number.innerText=newNumber-1
})