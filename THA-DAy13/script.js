const btn = document.querySelector("button")


let parentDiv = document.createElement('div')
btn.addEventListener('click',()=>{
    console.log("works");
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => 
        quote.innerText = `${data.quote}`,
        
    )
    }
    )
