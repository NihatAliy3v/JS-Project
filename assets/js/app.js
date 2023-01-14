const dropDown = document.querySelector(".dropDown");
//user
function hiSay(event){
    event.preventDefault();
    dropDown.classList.toggle("active");
}
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
    if(window.pageYOffset>projects.offsetTop){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}