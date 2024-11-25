
const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");


function AddTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData(inputBox.value,li);
    }
    
    inputBox.value ="";
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        let info = e.target.parentElement.innerHTML;
        console.log(info);
        for (var i = 0; i<= keys.length; i++) {
            var key = keys[i];
            var value = localStorage.getItem(key);
            if (value === info){
                localStorage.removeItem(key)
            }
            
        }

    }
}, false);

function saveData(nombrelista,lista){
    localStorage.setItem(nombrelista,lista.innerHTML);
}

function showTask(texto){
    if (localStorage.getItem(texto)){
        let info = localStorage.getItem(texto)
        let li = document.createElement("li");
        li.innerHTML = info;
        listContainer.appendChild(li);
    }
    
}


var keys = Object.keys(localStorage);
for (var i = 0; i<= keys.length; i++) {
    var key = keys[i];
    var value = localStorage.getItem(key);
    console.log("Key: " + key + ", Value: " + value);
    showTask(key);
}


