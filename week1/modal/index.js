const button = document.getElementById("button")
const button1 = document.getElementById("button1")
const modal1=document.querySelector(".modal1")


button.addEventListener('click', () => {
    modal1.style.display="block";
})

button1.addEventListener('click', () => {
    modal1.style.display="none";
})

