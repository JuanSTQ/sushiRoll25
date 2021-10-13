const frontend = document.getElementById("frontend")
const backend = document.getElementById("backend")
const frontend2 = document.getElementById("frontend2")
const backend2 = document.getElementById("backend2")
console.log(frontend2, backend2)
setInterval(()=>{
  if(frontend.style.transform === "rotateY(180deg)"){
    backend.style.transform = "rotateY(-180deg)"
    frontend.style.transform= "rotateY(0deg)"
    backend2.style.transform = "rotateY(-180deg)"
    frontend2.style.transform= "rotateY(0deg)"
  }else{
    frontend.style.transform= "rotateY(180deg)"
    backend.style.transform = "rotateY(0deg)"
    frontend2.style.transform= "rotateY(180deg)"
    backend2.style.transform = "rotateY(0deg)"
  }
},2700)