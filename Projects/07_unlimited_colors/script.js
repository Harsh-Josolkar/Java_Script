const Start = document.querySelector("#start")
const Stop = document.querySelector("#stop")
let clear;
function randomColors() {
  const hex =  "0123456789ABCDEF"
  let color = "#"
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

function changeColors(){
    document.body.style.backgroundColor = randomColors()
}

Start.addEventListener('click', ()=>{
     if(!clear){
      clear = setInterval(changeColors, 1000);
     }
})
Stop.addEventListener('click', ()=>{
    clearInterval(clear);
    clear = null;
})



