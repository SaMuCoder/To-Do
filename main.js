const input = document.getElementById("input-box"); 
const list  = document.getElementById("list-container"); 

function addTask() {
    if (input.value === '') {
        alert('Write Your Task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
    }
    saveData();
}


list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
}, false);

function saveData() {
   localStorage.setItem("data", list.innerHTML); 
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();
