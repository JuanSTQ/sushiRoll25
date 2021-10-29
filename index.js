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

/* ******** TEXT DINAMIC ******* */

const underscore = document.getElementById('console')
/* const ghost = document.getElementById('ghost-active') */
const text = document.getElementById('text')



const write = (word)=>{
  const id = setInterval(()=>{
    const lenghtText = text.textContent.length ||0
    if(lenghtText===word.length){
      clearInterval(id)
      setTimeout(()=>{
        eraser(word, 0)
      }, 1200)
      return true
    }else{
      text.textContent += word[lenghtText]
    }
  },80)
}
//CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer
const getWord = (beforeWord)=>{
  const messages = ["INSCRIBETE 🍹", "ÚLTIMOS CUPOS", "🍹🍹🍹", "BIENVENIDO"];
  const index=messages.indexOf(beforeWord)
  if(index===messages.length-1){
    return messages[0]
  }
  return messages[index+1]
}
const eraser = (word, count)=>{
  let c = count;
  const id = setInterval(()=>{
    const lenghtText = text.textContent.length ||0
    if(lenghtText===0){
      clearInterval(id)
      const newWord = getWord(word)
      write(newWord)
      return true
    }
    text.textContent = word.substring(0, word.length-c)
    c++
  },30)
}
write("BIENVENIDO")

const containerHeader = document.getElementById('students')
console.log(containerHeader)
const title1 = document.getElementById('title1')
const observer = new IntersectionObserver((entries)=>{
  console.log(entries[0].isIntersecting)
  entries.filter((entry)=>{return entry.isIntersecting}).forEach(element => {
    containerHeader.classList.remove('container_header_top1')
  });
  entries.filter((entry)=>{return entry.isIntersecting===false}).forEach(element=>{
    containerHeader.classList.add('container_header_top1')
  })
}, {threshold:0.5})
observer.observe(title1)
