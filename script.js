
// FONCTION //
carrouselFunc()
lightboxPop()
scrollEffect()

// constantes //
const carousel = document.querySelector(".carrousel")
const mainContainer = document.querySelector(".main-container")
const hamburger = document.querySelector(".hamb")
const body = document.querySelector("body")


function hambResponsiv () {
    let isOpen = false
    hamburger.addEventListener("click", () => {
        const spanOne = document.querySelector(".hamb-span1")
        const spanTwo = document.querySelector(".hamb-span2")
        const spanThree = document.querySelector(".hamb-span3")
        if (isOpen === false) {
        spanOne.style.transform = "rotate(50deg)"
       spanOne.style.opacity = "0"
        spanTwo.style.transform = "rotate(-50deg)"
        spanTwo.style.opacity = "0"
        spanThree.style.opacity = "0"
        spanThree.style.display = "none"
        document.querySelector(".resp-menu").style.height = "243px" 
   
            document.querySelector(".close2").style.opacity = "1"; 
       
        
        
        isOpen = true
        } else if (isOpen === true) {
            spanOne.style.transform = "rotate(0deg)"
            spanOne.style.opacity = "1"
            spanTwo.style.transform = "rotate(0deg)"
            spanTwo.style.opacity = "1"
            spanThree.style.opacity = "1"
            spanThree.style.display = "block" 
            document.querySelector(".resp-menu").style.height = "0px" 
           
                document.querySelector(".close2").style.opacity = "0"; 
           
            
            
          
            
            isOpen = false
       
            
        } 
    })
}
hambResponsiv()

function carrouselFunc () {
    if (window.innerWidth > 400 ) {
const arrowL = document.querySelector(".arrow-left")
const arrowR = document.querySelector(".arrow-right")
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
        initT = 0;
        console.log(initT);
    } else {
        console.log("work");
        initT = initT - amountT
        carousel.style.transform = `translate(${initT}px)`;
    console.log(initT);    
    }
    
})
    }


}

// LIGHTBOX //
function lightboxPop () {
    const image = document.querySelectorAll(".thumbnail-1");
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
}




window.onscroll = () => {
    let pos = window.scrollY

}

function scrollEffect () {
    if (window.innerWidth >= 1024) {
    const realisation = document.querySelector(".realisation")
    const explain = document.querySelector(".explain")
    console.log(explain);
    window.addEventListener("scroll", () => {
        if (window.scrollY <= 200) {
            realisation.style.opacity = "0"
            realisation.style.transition = "1.5s"

            explain.style.opacity = "0"
            explain.style.transition = "1s ease-in-out"
            explain.style.transform = "translateY(150px)"
        
        } else {
            realisation.style.opacity = "1"
            explain.style.opacity = "1"
            explain.style.transform = "translateY(0)"

            
        }
    })
    window.addEventListener("scroll", () => {
        const ContactButton = document.querySelector(".number")
        const ContactButton2 = document.querySelector(".num")
        const header = document.querySelector("header")
        const postHeader = document.querySelector('.postheader')

        if(window.scrollY >= 190){
            header.appendChild(ContactButton)
            ContactButton.style.top = "5%"
            ContactButton.style.right = "36%" 
            ContactButton.style.background = "black"
            ContactButton2.style.color = "#AD974F"
            ContactButton.style.opacity = "1"
            ContactButton.style.transition = "0.3s"
        } else {
           postHeader.appendChild(ContactButton) 
            ContactButton.style.top = "250px"
            ContactButton.style.right = "10%"
            ContactButton.style.background = "white"
            ContactButton2.style.color = "black"
            ContactButton.style.position= "absolute"


        }
    })
}

}

