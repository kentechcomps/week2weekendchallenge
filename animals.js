animals()
formlistener()
function fetchanimallist(animal){
  const animalitem = document.createElement("li")
  
  animalitem.innerHTML = `<p id = "myvt"> ${animal.name}</p>`
  const mylist = document.getElementById("myanimallist")
  mylist.append(animalitem)  
}

function createanimalelement(animal){

 const listitem =document.createElement('li')
 listitem.id= 'animal'
 listitem.innerHTML = 
 `
 <h3> ${animal.name}</h3>
 <img src ="${animal.image}">
 <div class = "content" >
 <p id = "myvt"> ${animal.votes}</p>
 </div>
 <div>
 <button id = 'btn' > Vote </button>
 <button id = 'reset' >   ResetVote </button>
 </div>
  `

  const myunorderedanimalist = document. getElementById('unorderedlist')
  myunorderedanimalist.append(listitem)
  
     const button = document.getElementById('btn')
     button.addEventListener('click' ,()=>{
     const vote = document.getElementById('myvt')
     vote.innerText =  (animal.votes) +1
      })

      const resetv = document.getElementById('reset')
      resetv.addEventListener('click' ,()=>{
        const vote = document.getElementById('myvt')
        vote.innerText =  0
    })
  }
//fetchdata   
function animals(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(jos=>
     jos.forEach(animal => createanimalelement(animal)))
    }

    function animalist(){
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(jos=>
         jos.forEach(animal => createanimallist(animal)))
        }

     function formlistener(){
     const myform = document.getElementsByTagName("form")
      myform.addEventListener('submit' ,(event)=>{
        event.preventDefault();
        const animalnameinput = document.getElementById('Animalname')
         fetch(`http://localhost:3000/characters/${animalnameinput.value}`)
        .then(res => res.json())
        .then(animaldata=>{
      const addedid = document.getElementById('addedid')
      const addedname = document.getElementById('addedname')
      addedid.innerText = animaldata.id;
      addedname.innerText = animaldata.name;
      
        })
        
  })
      }

        
    // animalist()
     
    
   