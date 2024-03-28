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
    li1.style.color = 'black';
    li1.style.fontSize = '1.25rem';


    let div1 = document.createElement('div');
    div1.classList.add("carousel-item");


    let div2 = document.createElement('div');
    div2.classList.add("img-box");
    div2.classList.add("b-" + compoNum);


    div1.appendChild(div2);


    let img1 = document.createElement('img');
    img1.src = "images/hot-1.png";

    div2.appendChild(img1);

    let h1 = document.createElement('h3');
    h1.classList.add("subtitle");
    h1.innerHTML = "2nd text";

    div1.appendChild(h1);

    let btnDiv = document.createElement('div');
    btnDiv.classList.add("btn-box");

    let a = document.createElement('a');
    a.classList.add("btn-1");
    a.innerHTML = "Click";

    btnDiv.appendChild(a);

    div1.appendChild(btnDiv);
    let parentDiv = document.querySelector(".carousel-inner");
    parentDiv.appendChild(div1); 
}


component("2ndwebsite");


function hotSection() {
    let hotDiv = document.createElement('div');
    hotDiv.classList.add("item");

    let hotDiv2 = document.createElement('div');
    hotDiv2.classList.add("box");

    let hotDiv3 = document.createElement('div');
    hotDiv3.classList.add("img-box");

    hotDiv2.appendChild(hotDiv3);

    let hotImg = document.createElement('img');
    hotImg.src = "images/dish.jpg";

    hotDiv3.appendChild(hotImg);
    hotDiv.appendChild(hotDiv2);

    let hotParent = document.querySelector(".owl-carousel")
    hotParent.appendChild(hotDiv);

    let hotText = document.createElement('div');
    hotText.classList.add("detail-box");

    hotDiv2.appendChild(hotText);

    let para = document.createElement('h4');
    para.innerText = "$30";

    let para2 = document.createElement('p');
    para2.innerText = "There are many variations of passages of Lorem Ipsum available,";

    hotText.appendChild(para);
    hotText.appendChild(para2);

    let button = document.createElement('a');
    button.innerText = "Order Now";

    hotText.appendChild(button);

};

hotSection();