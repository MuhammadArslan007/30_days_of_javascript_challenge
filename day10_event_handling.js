//Tasks/Activities
//Activity1 Basic of Event Handling 
const button = document.querySelector('.button-change-text')
const p1 = document.querySelector('.change-text')
button.addEventListener('click', () => {
    p1.textContent = "Text After button press"
})


const hidingImage = document.querySelector('.hiding-button')
const showImage  = document.querySelector(".show-button")
const toggleImage = document.querySelector(".toggle-image")
hidingImage.addEventListener('dblclick', () => {
    toggleImage.style.display = 'none'
})

showImage.addEventListener('dblclick', ()=>{
    toggleImage.style.display = 'block'
})

//Activity2 Mouse Events
const changeBgColor = document.querySelector('.change-bgc')
changeBgColor.addEventListener('mouseover', ()=>{
    changeBgColor.style.backgroundColor = "green"
})


changeBgColor.addEventListener("mouseout", () => {
    changeBgColor.style.backgroundColor = 'red'
})

//Activity3 Keyboard Events
const keylog = document.querySelector('.keylog')
keylog.addEventListener('keydown', (e) => {
    console.log(e.key);
})

keylog.addEventListener('keyup', (e) => {
    console.log(e.key);
})

//Activity4 Form Events
const preventDefault = document.querySelector('.prevent-default')

preventDefault.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const formDataFetch = new FormData(e.target)
    const formProps = Object.fromEntries(formDataFetch);
    console.log(formProps);
     
})


const dropDown = document.querySelector('.write-in-p')
const p2 = document.querySelector('.select-value')


dropDown.addEventListener('change', (e) => {
    
    p2.textContent = dropDown.options[ dropDown.selectedIndex].value 
})

//Activity5 Event delegation
const delegation = document.querySelector('.delegation')
delegation.addEventListener('click', (e) => {
    if(e.target.nodeName === "LI") console.log(e.target.textContent);
})


const delegationDynamic = document.querySelector('.delegationDynamic')
const addItemBtn = document.querySelector('.addItem')


addItemBtn.addEventListener('click', addItem)
delegationDynamic.addEventListener('click', (e) => {
    if (e.target.nodeName === "LI") console.log(e.target.textContent);
})
let totalItems = 3;
function addItem(){
    totalItems++;
    const item = document.createElement('li')
    item.textContent = `item ${totalItems}`
    delegationDynamic.appendChild(item)
}

