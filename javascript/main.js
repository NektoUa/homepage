const hello = () => {
    let hourNow = new Date().getHours();
    let greeting = "";
    if (hourNow > 18) greeting = "Hello!";
    else if (hourNow > 12) greeting = "Hola!";
    else if (hourNow > 0) greeting = "Bonjour!";
    else greeting = "Вітаю!";
    return greeting
}
document.querySelector("#part-day").innerHTML = hello();


let socialWrapper = document.querySelector(".socialWrapper")

function mouseIn(value) {
    let targetId = value.srcElement.id;
    for (let i = 1; i <= 4; i++) {
        if (socialWrapper.classList.contains("socialActive" + i)) socialWrapper.classList.remove("socialActive" + i);
    }
    socialWrapper.classList.toggle("socialActive" + targetId);
}

function mouseOut(value) {
    let targetId = value.srcElement.id;
    socialWrapper.classList.remove("socialActive" + targetId);
}

document.querySelectorAll(".social li a").forEach((item, i) => {
    item.addEventListener("mouseover", mouseIn)
})
document.querySelectorAll(".social li a").forEach((item, i) => {
    item.addEventListener("mouseout", mouseOut)
})


