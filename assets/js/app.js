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
btns[0].classList.add("active");
skillList[0].classList.add("active");
btns.forEach((item)=>{
    item.addEventListener("click",function(e){
        const dataTab = e.target.getAttribute("data-tab");
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
            console.log(item);
        }else{
            accItem.forEach(item=>{
                item.classList.remove("active");
            })
            item.classList.add("active");
        }
        
    })
});
