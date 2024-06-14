const fetchJokes = async ()=>{
    const data = await fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)
            return data;
        })
        .catch((err)=>{
            console.log(err);
        })
const div  = document.getElementById("div")
    const jokeDiv = document.createElement("div")
    jokeDiv.setAttribute('class','flex rounded-xl flex-col bg-blue-800 px-10 py-8')
    jokeDiv.innerHTML = `
    <div class="flex flex-col">
    <p class="flex flex-col items-center justify-center text-purple-300"><span class="text-2xl font-bol text-orange-300">Question Type:</span><span>${data.type}</span></p>
    <p class="flex flex-col items-center justify-center text-purple-300"><span class="text-2xl font-bol text-orange-300">Question:</span><span>${data.setup}</span></p>
    <p class="flex flex-col items-center justify-center text-purple-300"><span class="text-2xl font-bol text-orange-300">reply:</span><span>${data.punchline}</span></p>
    </div>
    `
    const button = document.createElement("button")
    button.setAttribute('class', 'px-[4rem] py-3 bg-purple-600 rounded-full')
    button.textContent ='Another one'
    function refresh(){
        window.location.reload()
    }
    button.addEventListener("click",refresh)
    jokeDiv.appendChild(button)
    div.appendChild(jokeDiv)

    
}
fetchJokes();