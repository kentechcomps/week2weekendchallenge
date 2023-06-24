
function createanimalelement(animal){
const myunorderedanimalist = document. getElementById('unorderedlist')
 const listitem =document.createElement('li')
 listitem.id= 'animal'
 listitem.innerHTML = 
 `<img src ="${animal.image}">
 <div class = "content" >
 <h3> ${animal.name}</h3>
 <p> ${animal.id}</p>
`
 myunorderedanimalist.append(listitem)

}
//fetchdata   
function animals(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(characters=>
        characters.forEach(animal => createanimalelement(animal)))
        
    }
    
function initalizeattempt(){
    animals()
}
initalizeattempt()