const dropDown = document.querySelector(".dropDown");
//user
function hiSay(event){
    event.preventDefault();
    dropDown.classList.toggle("active");
}
const user = document.querySelector(".user")

window.onclick = function(event){
    if(!event.target.closest(".user")){
        dropDown.classList.remove("active");
    }
}
setTimeout(()=>{
    dropDown.classList.add("active");
},3000)



//header
window.onscroll = headerHandler;
const projects = document.querySelector("#projects");
const header = document.querySelector(".header");
function headerHandler(){
    if(window.pageYOffset>projects.offsetTop-1){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}



//SKILLS

const btns = document.querySelectorAll(".btn");
const skillList = document.querySelectorAll(".skill-list");
const skillItem = document.querySelectorAll(".skill-list")
btns.forEach((item)=>{
    item.addEventListener("click",function(e){
        e.preventDefault();
        let dataTab = e.target.getAttribute("data-tab");
        const skillItem = document.querySelector(dataTab);
        btns.forEach((element)=>{
            element.classList.remove("active");
        })
        skillList.forEach((element)=>{
            element.classList.remove("active");
        })
        
        skillItem.classList.add("active");
        e.target.classList.add("active");
    })
})

//accordion

const accItem = document.querySelectorAll(".box-item");
const accContent = document.querySelectorAll(".content");
accItem.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.closest(".active")){
            item.classList.remove("active");
        }else{
            accItem.forEach(item=>{
                item.classList.remove("active");
            })
            item.classList.add("active");
        }
    })
});


//contact

const inputName = document.querySelector("#username");
const btnSend = document.querySelector(".btn-send");
const warningName = document.querySelector(".warning-name");

btnSend.classList.add("disable");
inputName.addEventListener("keyup",function(e){
    e.preventDefault();
    if(inputName.value.length<=3){
        warningName.textContent="3den boyuk olmalidi";
        btnSend.disabled=true;
    }else{
        warningName.innerHTML="&nbsp;";
        btnSend.disabled=false;
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }  else{
        btnSend.classList.remove("disable");
    } 
    emptyCheck()
});

const email = document.querySelector("#email");
const warningEmail = document.querySelector(".warning-email");
email.addEventListener("keyup",function(e){
    e.preventDefault();
    let emLetter = email.value.split("").findIndex((letter)=>{
        return letter=="@";
    })
    let count = email.value.split("").slice(emLetter).length;
    if(count==1){
        warningEmail.textContent="duzgun deyil";
        btnSend.disabled=true;
    }else{
        warningEmail.innerHTML="&nbsp;";
        btnSend.disabled=false;
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }else{
        btnSend.classList.remove("disable");
    }   
    emptyCheck()
});

const messageBox = document.querySelector("#messageBox");
const warningMessage = document.querySelector(".warning-message");

messageBox.addEventListener("keyup",function(e){
    e.preventDefault();
    if(messageBox.value.length<=10){
        warningMessage.textContent="10den boyuk olmalidi";
        btnSend.disabled=true;
    }else{
        warningMessage.innerHTML="&nbsp;";
        btnSend.disabled=false;
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }  else{
        btnSend.classList.remove("disable");
    } 
    emptyCheck()
});


function emptyCheck(){
    if(inputName.value==""||email.value==""||messageBox.value==""){
        btnSend.disabled=true;
        btnSend.classList.add("disable");

    }
}
