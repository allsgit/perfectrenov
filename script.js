const arrowL = document.querySelector(".arrow-left")
const arrowR = document.querySelector(".arrow-right")
const carousel = document.querySelector(".carrousel")
const mainContainer = document.querySelector(".main-container")
const image = document.querySelectorAll(".thumbnail-1");
const body = document.querySelector("body")
console.log(body);

let init = 0;
let amount = 200;
arrowL.addEventListener('click', () => {
    if (init >= 600){
        carousel.style.transform = `translate(0px)`
        init = 0;
    } else {
        console.log("work");
        init += amount
        carousel.style.transform = `translate(${init}px)`;
        console.log(init);    
    }
    
})
let initT = 0
let amountT = 200;
arrowR.addEventListener('click', () => {
    if (initT <= -600 ){
        carousel.style.transform = `translate(0px)`
        iniT = 0;
    } else {
        console.log("work");
        initT = initT - amountT
        carousel.style.transform = `translate(${initT}px)`;
    console.log(initT);    
    }
    
})



image.forEach(element => {
    element.addEventListener("click" , (e) => {
        mainContainer.style.filter = "blur(10px)"
        const lightbox = document.querySelector(".overbox");
        lightbox.style.display = "flex"
        lightbox.style.opacity = "1"
        mainContainer.style.pointerEvents = "none"
        const imageAppend = document.createElement("img")
        const close = document.createElement("button")
        close.className = "close"
        close.innerText = "X"
        lightbox.appendChild(imageAppend)
        lightbox.appendChild(close)
        imageAppend.src = e.target.src
        console.log(e.target.src);
        close.addEventListener("click", () =>{
            lightbox.style.display = "none"
            imageAppend.remove()
            close.remove()
            mainContainer.style.filter = "blur(0px)"
            mainContainer.style.pointerEvents = "auto"
        } )
    })
});

