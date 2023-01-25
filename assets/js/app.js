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
        inputName.classList.add("false-color");
        inputName.classList.remove("true-color");
    }else{
        warningName.innerHTML="&nbsp;";
        btnSend.disabled=false;
        inputName.classList.remove("false-color");
        inputName.classList.add("true-color");
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }  else{
        btnSend.classList.remove("disable");
    } 
    emptyCheck()
    falseCheck() 
});

const email = document.querySelector("#email");
const warningEmail = document.querySelector(".warning-email");
email.addEventListener("keyup",function(e){
    e.preventDefault();
    let inLetter = email.value.split("").findIndex((letter)=>{
        return letter=="@";
    })
    let emLetter = email.value.split("").filter((letter)=>{
        return letter=="@";
    })
    let countNext = email.value.split("").slice(inLetter);
    let countPrevious = email.value.split("").slice(0,inLetter);
    console.log(emLetter);
    if(countNext.length==1||countPrevious.length==0||emLetter.length>1){
        warningEmail.textContent="duzgun deyil";
        btnSend.disabled=true;
        emailCheck=true;
        email.classList.add("false-color");
        email.classList.remove("true-color");
    }else{
        warningEmail.innerHTML="&nbsp;";
        btnSend.disabled=false;
        emailCheck=false;
        email.classList.remove("false-color");
        email.classList.add("true-color");
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }else{
        btnSend.classList.remove("disable");
    }   
    emptyCheck()
    falseCheck()
});

const messageBox = document.querySelector("#messageBox");
const warningMessage = document.querySelector(".warning-message");

messageBox.addEventListener("keyup",function(e){
    e.preventDefault();
    if(messageBox.value.length<=10){
        warningMessage.textContent="10den boyuk olmalidi";
        btnSend.disabled=true;
        messageBox.classList.add("false-color");
        messageBox.classList.remove("true-color");
        
    }else{
        warningMessage.innerHTML="&nbsp;";
        btnSend.disabled=false;
        messageBox.classList.remove("false-color");
        messageBox.classList.add("true-color");
    }
    if(btnSend.disabled){
        btnSend.classList.add("disable");
    }  else{
        btnSend.classList.remove("disable");
    } 
    emptyCheck()
    falseCheck()
});


function emptyCheck(){
    if(inputName.value==""||email.value==""||messageBox.value==""){
        btnSend.disabled=true;
        btnSend.classList.add("disable");
    }
}
function falseCheck(){
    if(inputName.value.length<=3||messageBox.value.length<=10||emailCheck){
        btnSend.disabled=true;
        btnSend.classList.add("disable");
    }
}



