const Jokebtn = document.getElementsByClassName("Joke")[0];
const Setup = document.getElementsByClassName("Setup")[0];
const Punchline = document.getElementsByClassName("Punchline")[0];
const Joke = document.getElementsByClassName("Jokes")[0];
const line = document.getElementsByClassName("punchline")[0];

let setup;
let punchline;

async function fetchdata(){
    const data = await fetch('https://official-joke-api.appspot.com/random_joke')
      const temp = await data.json()
      setup = temp.setup;
      punchline = temp.punchline;
}

Jokebtn.addEventListener( 'click' , () =>{
    fetchdata();
    Joke.textContent = setup;
    line.textContent = punchline;
    Setup.style.display = "flex";
    Punchline.style.display = "flex";
    console.log("joke");
});


fetchdata();