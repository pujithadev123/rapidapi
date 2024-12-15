let url='https://ecommerce-api3.p.rapidapi.com/malefootwear';
let option={
    method:'GET',
    headers:{
       'x-rapidapi-key':"34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb",
       'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
}


let container=document.getElementById("container")
alldata=[]
let btn=document.getElementById("fetchdata")

function displaycards(y){
    container.textContent=""
   y.forEach(x => {
    let card=document.createElement("div")
    card.innerHTML=`<img src="${x.Image}" width="200"/> <p>${x.Brand}</p> <button>AddToCart</button>` 
    container.append(card)
   });
}


const getdata = async ()=>{
    const data=await fetch(url,option).then(res=>res.json()) .then(res=>res).catch(err=>console.log(err))
   alldata=data
   displaycards(data)
console.log(data)   
}
getdata()

let puma=document.getElementById("puma")
puma.addEventListener("click",()=>{
  const filterdata= alldata.filter(x=>x.Brand.toLowerCase()=== "puma")
  console.log(filterdata)
  displaycards(filterdata)
})


let red=document.getElementById("red-tape")
red.addEventListener("click",()=>{
  const filterdata= alldata.filter(x=>x.Brand.toLowerCase()=== "red tape")
  console.log(filterdata)
  displaycards(filterdata)
})


let bata=document.getElementById("Bata")
bata.addEventListener("click",()=>{
  const filterdata= alldata.filter(x=>x.Brand.toLowerCase()=== "bata")
  console.log(filterdata)
  displaycards(filterdata)
})


let sparx=document.getElementById("sparx")
sparx.addEventListener("click",()=>{
  const filterdata= alldata.filter(x=>x.Brand.toLowerCase()=== "sparx")
  console.log(filterdata)
  displaycards(filterdata)
})


let wl=document.getElementById("woodland")
wl.addEventListener("click",()=>{
  const filterdata= alldata.filter(x=>x.Brand.toLowerCase()=== "woodland")
  console.log(filterdata)
  displaycards(filterdata)
})