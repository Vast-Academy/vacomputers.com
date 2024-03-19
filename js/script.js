function component(compoNum) {
    let li1 = document.createElement('li');
    li1.setAttribute("data-target", "#carouselExampleIndicators");
    li1.setAttribute("data-slide-to", compoNum - 1);
    if (compoNum < 10) {
        li1.innerHTML = "0" + compoNum;
    } else {
        li1.innerHTML = compoNum;
    }


    let parentOl = document.querySelector(".carousel-indicators");
    parentOl.appendChild(li1);


    let div1 = document.createElement('div');
    div1.classList.add("carousel-item");


    let div2 = document.createElement('div');
    div2.classList.add("img-box");
    div2.classList.add("b-" + compoNum);


    div1.appendChild(div2);


    let img1 = document.createElement('img');
    img1.src = "images/hot-3.png";


    div2.appendChild(img1);


    let parentDiv = document.querySelector(".carousel-inner");
    parentDiv.appendChild(div1);
}


component(5);
component(6);
component(7);
component(8);
component(9);
component(10);
component(11);

function hotSection () {
let hotParent = document.querySelector(".owl-carousel")
    
    let hotDiv = createElement('div');
    hotDiv.classList.add("item");

    let hotDiv2 = createElement('div');
    hotDiv2.classList.add("box");

    let hotDiv3 = createElement('div');
hotDiv3.classList.add("img-box");

hotDiv2.appendChild(hotDiv3);
    
let hotImg = createElement('img');
hotImg.src = "images/dish.jpg";

hotDiv3.appendChild(hotImg);
hotDiv.appendChild(hotDiv2);

hotParent.appendChild(hotDiv);
};

hotSection();