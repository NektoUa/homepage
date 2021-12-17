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


let socialWrapper = document.querySelector(".socialWrapper");

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

let socialLiA = document.querySelectorAll(".social li a");
socialLiA.forEach((item, i) => {
    item.addEventListener("mouseover", mouseIn)
});
socialLiA.forEach((item, i) => {
    item.addEventListener("mouseout", mouseOut)
});

let avatar = document.querySelector(".contact-info__avatar");
let header = document.querySelector(".change");

function againMe() {
    avatar.src = "./assets/my_avatar.jpg";
    header.innerHTML = "I'm Illia";
}

function bulka() {
    avatar.src = "./assets/avatar.jpg";
    header.innerHTML = "I'm Bulka";
    setTimeout(againMe, 300);
}

avatar.addEventListener("mouseover", bulka);


