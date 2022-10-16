let todo = document.querySelector("#taskInput");
let btn = document.querySelector("#push");


let todoList = document.querySelector(".task");

btn.addEventListener("click", function (event) {
    // console.log(event)
    let todo = document.querySelector("#taskInput");
    addTodo(todo.value);
    todo.value = "";
})

const addTodo = (todo) =>{
    const listTodo = document.createElement("li");
    listTodo.innerHTML = ` ${todo}
    <i class="fa-solid fa-trash"></i>`;

    listTodo.addEventListener("click", function (){
        this.classList.toggle("done");
    })

    listTodo.querySelector("i").addEventListener("click", function (){
        listTodo.remove();
    })

    todoList.appendChild(listTodo);
}



