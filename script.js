var input = document.getElementsByClassName("in")[0];
var add = document.getElementsByClassName("add")[0];
var tasks = document.getElementsByClassName("tasks")[0];

function addtolist() {
    var items = document.createElement("div");
    items.innerHTML = '<i class="fa-solid fa-circle-check"></i>' + input.value;
    items.classList.add("listitem");
    tasks.appendChild(items);
    input.value = "";

    items.addEventListener("click", function() {
        this.remove();
    })
}
add.addEventListener("click", addtolist);


