const mylist = document.getElementById("myanimallist")
const myemptyanimalcontainer = document.getElementById('animalcontainer')


  fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(jos=> {
    jos.forEach(animal => {
      console.log(animal)

     const animalitem = document.createElement("li")
      animalitem.innerText = animal.name
      mylist.append(animalitem)

      itemwhenclicked( animalitem , animal )    
      displayanimaldetail(animal)  
    } )
    
  }) 
function itemwhenclicked( animalitem , animal ){
   animalitem.addEventListener('click' , ()=> {
    displayanimaldetail(animal)

   })

}
function displayanimaldetail(animal){
 myemptyanimalcontainer.innerHTML = ''
  
  const myimg = document.createElement('img')
  myimg.src = animal.image;
  myemptyanimalcontainer.appendChild(myimg)


  const name = document.createElement('p')
  name.innerText = animal.name
  myemptyanimalcontainer.appendChild(name)

  const votes = document.createElement('p')
  votes.id = 'dissplayvotes'
  votes.innerText = animal.votes
  myemptyanimalcontainer.appendChild(votes)
  
  const  votebutton = document.createElement("button")
  votebutton.id = 'votes'
  votebutton.innerText = "VOTES"
   myemptyanimalcontainer.appendChild(votebutton)

   const  resetbutton = document.createElement("button")
   resetbutton.id = 'ressetbtn'
   resetbutton.innerText = "RESETVOTES"
   myemptyanimalcontainer.appendChild(resetbutton)
  

   const voting = document.getElementById('votes')
   voting.addEventListener('click', ()=>{
    
    const displayvotes = document.getElementById('dissplayvotes')

    displayvotes.innerText = (animal.votes) ++
   } )
   
  const resetbtn = document.getElementById('ressetbtn')
  resetbtn.addEventListener('click',()=>{
    const displayvotes = document.getElementById('dissplayvotes')
     displayvotes.innerText = 0
  } )


}




















































































//animals()
//formlistener()

// function createanimalelement(animal){
//  const listitem =document.createElement('li')
//  listitem.id= 'animal'
//  listitem.innerHTML = 
//  `
//  <h3> ${animal.name}</h3>
//  <img src ="${animal.image}">
//  <div class = "content" >
//  <p id = "myvt"> ${animal.votes}</p>
//  </div>
//  <div>
//  <button id = 'btn' > Vote </button>
//  <button id = 'reset' >   ResetVote </button>
//  </div>
//   `

//   const myunorderedanimalist = document. getElementById('unorderedlist')
//   myunorderedanimalist.append(listitem)
    
//     //voteforanimal
//      const button = document.getElementById('btn')

//      button.addEventListener('click' ,()=>{
//      const vote = document.getElementById('myvt')
//      vote.innerText =  (animal.votes) ++
//       })

//     //resetvotes
//       const resetv = document.getElementById('reset')
//       resetv.addEventListener('click' ,()=>{
//         const vote = document.getElementById('myvt')
//         vote.innerText =  0
//     })
//   }
//fetchdata   
// function animals(){
//     fetch("http://localhost:3000/characters")
//     .then(res => res.json())
//     .then(jos=>
//      jos.forEach(animal => createanimalelement(animal)))
//     }

    
    
        
  //    function formlistener(){

  //    const myform = document.getElementsByTagName("form")
  //     const addbtn = document.getElementById("addanimal")
  //     addbtn.addEventListener('submit' ,(event)=>{
  //       event.preventDefault();
  //       const animalnameinput = document.getElementById('Animalname')
       
  //       fetch(`http://localhost:3000/characters/${animalnameinput.value}`)
  //       .then(res => res.json())
  //       .then(animaldata=>{

  //     const addedid = document.getElementById('addedid')
  //     const addedname = document.getElementById('addedname')
  //     addedid.innerText = animaldata.id;
  //     addedname.innerText = animaldata.name;
  //       })
  // })
  //     }
  //   // animalist()
     
    
   