let task = document.querySelector("input");
let addBtn = document.querySelector("#btn1");
let deletBtn = document.querySelector("#btn2");
let allList = document.querySelector(".tasklist");



 addBtn.addEventListener("click", function() {
            let newList = document.createElement("li");
            allList.appendChild(newList);
            newList.innerText = task.value;

            let dell = document.createElement("button");
            dell.classList.add("delete");
            dell.innerText = "delete"
            newList.appendChild(dell);


            task.value = "";
 });


allList.addEventListener("click", function(event) {
            if (event.target.nodeName == "BUTTON") {
                let listItem = event.target.parentElement;
                console.log(listItem)
                listItem.remove();


            }
})





