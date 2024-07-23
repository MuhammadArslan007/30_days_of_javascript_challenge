//Tasks/Activities
//Activity1 Selecting and Manipulating Elements
document.getElementById("htag").innerHTML = "Changed by javascript in Day 9 DOM challenge"
const elByClass = document.getElementsByClassName("hclass")[0]
elByClass.style.backgroundColor = 'red';

//Activity2 creating and appending elements
const newdiv = document.createElement("div")
const p1 = document.createElement('p')
p1.textContent = 'We add paragraph into div'
newdiv.appendChild(p1)
document.body.appendChild(newdiv)

const ulByTag = document.getElementsByTagName('ul')[0]
const newLi = document.createElement('li')
newLi.textContent = "four"
ulByTag.appendChild(newLi)

//Activity3 Removing Elements
const h1 = document.getElementById('htag')
h1.remove()


function removeAnyChild(index){
    const child = document.getElementsByTagName('ul')[0].children
   if(index>=0 && index < child.length){
    child[index].remove()
   }
}

removeAnyChild(1)

//Activity4 Modifying the Attributes and Classes
const attAddChange = document.getElementsByTagName('ul')[0]
attAddChange.setAttribute("id","unorder")
attAddChange.setAttribute('class',"classunorder")
attAddChange.setAttribute('style','background-color:green;')
attAddChange.setAttribute('style','background-color:gray;')

const addRemoveClass = document.getElementById('addRemoveClass')
addRemoveClass.classList.add('divBorder')
addRemoveClass.classList.remove('container')

//Activity5 Event Handling
const button = document.getElementById('pButton')
const pText = document.getElementById('pText')

function changeParagraphText(text){
    return button.addEventListener('click', () =>{
        pText.textContent = text
    })
}

changeParagraphText('Text chage by clicking the button')


button.addEventListener('mouseover', () => {
    button.style.border = '4px solid green'
})


