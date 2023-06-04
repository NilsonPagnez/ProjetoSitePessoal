const nav = document.querySelectorAll(".navButtons")
const content = document.querySelectorAll(".content")

const videos = document.querySelectorAll(".video")
const descricoes = document.querySelectorAll(".DescProjeto")
const videoButtons = document.querySelectorAll(".videoBtn")


/* Função para mudar de abas ao clicar no NavBar*/ 
function changInfo(){
    nav.forEach((button, index) => {
        button.classList.remove("on")
    
        button.addEventListener("click", ()=>{
            button.classList.add("on")
            
            content.forEach((item)=>{
                item.classList.add("off")
            })
            content[index].classList.remove("off")
        })
    });
}


let valSlide = 0

/* Função para de videos e suas respectivas descrições */ 

function changeVideo(change){

    if(change == "next" && valSlide < descricoes.length -1){
        valSlide+= 1 
    }else if(change !== "next" && valSlide > 0 ){
        valSlide-= 1
    }
    
    videos.forEach((video, index)=>{
        video.classList.remove("on")

        if(index == valSlide ){
            video.classList.add("on")
        }
    })

    descricoes.forEach((descricao, index)=>{
        descricao.classList.remove("on")

        if(index == valSlide ){
            descricao.classList.add("on")
        }
    })
}