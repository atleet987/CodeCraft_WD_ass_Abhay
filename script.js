let btn1 = document.getElementById("submit")
// btn1.style.backgroundColor="blue"

btn1.addEventListener("click",(e)=>{
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem(JSON.stringify(titlec), JSON.stringify(descc))
    let n = localStorage.length
    todo.innerHTML=`<li>${titlec} - ${descc}</li>`

    title.value=""
    desc.value=""
})

