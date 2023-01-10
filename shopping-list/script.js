let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let liTags = document.querySelectorAll("li");
let deleteElements = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function toggle() {
    this.classList.toggle('done');
}

function remove() {
    this.parentElement.remove();
}

function createListElement() {
    let liWrapper = document.createElement("div");
    liWrapper.classList.add("list-element-wrapper");
    let li = document.createElement("li");
    let btn = document.createElement('button');
 
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", toggle)
    
    btn.innerText = "X";
    btn.classList.add("delete");
    btn.addEventListener("click", remove)

    liWrapper.appendChild(li);
    liWrapper.appendChild(btn);
    ul.appendChild(liWrapper);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liTags.forEach(li=> {
    li.addEventListener("click", toggle);
});

[...deleteElements].forEach(btn => {
    btn.addEventListener("click", remove);
});