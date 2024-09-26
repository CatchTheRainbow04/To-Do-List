const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    checkTask();
    inputBox.value = '';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        checkTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        checkTask();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function checkTask(){
    let notice = document.getElementById('notice');
    if(listContainer.getElementsByTagName('li').length > 0){
        notice.textContent = 'You should do the following :';
    }else{
        notice.textContent = '';
    }
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    checkTask();
}
showTask();