const para = document.getElementById("para");
const title = document.getElementById("title");
const button = document.getElementById("button");

const fetchAdvice = async ()=>{
    const data = await fetch ('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data) => {
        console.log(data.slip.advice)
        return data
    })
para.textContent = `${data.slip.advice}`
title.textContent = `${data.slip.id}`

}
fetchAdvice();

button.addEventListener("click", function(){
    fetchAdvice();
})