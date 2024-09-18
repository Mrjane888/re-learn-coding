const list = document.querySelectorAll('p');
console.log(list)

const getById = document.getElementById('idp01');
console.log(getById)

const getByqry = document.querySelector('.cp02');
console.log(getByqry)

const getByTagName = document.getElementsByTagName('body');
console.log(getByTagName[0]);

// const target = document.getElementById("target");


function changeTextButton1 () {
    getById.innerHTML = "Hello Sukar, Money, Gafield";
} 

function changeColor () {
    getByqry.style.color = "green";
}

function changeAllText () {
    console.log(list)
    // for (let i=0; i<list.length; i++) {
    //     list[i].innerHTML = "Sukar"
    // }
    list.forEach((obj)=> obj.innerHTML = "Hello Sukar")
}

function changeBackground () {
    getByTagName[0].style.backgroundColor = "black";
    getByTagName[0].style.color = "white";
}

function addText () {
    const mydiv = document.getElementById("mydiv");
    const para = document.createElement("p"); // create element p
    const text = document.createTextNode("My cat name Sukar, Gafield Money"); // create text 
    para.appendChild(text); // append text into element p
    mydiv.appendChild(para); // append element p into body html (tag div id mydiv)
    // document.getElementById("mydiv").appendChild("p").innerText = "Hello Sukar"

}




