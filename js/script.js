//Получение всех необходимых элементов
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

//Функция при добавлении, удалении и снятии с отметки задачи
function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    //Если длина задачи равна 0, то ожидающее числовое текстовое содержимое будет отсутствовать, 
    //если нет, то ожидающее числовое значение будет длиной задачи
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        return;
    }
    todoLists.style.marginTop = "0px";
}

//Добавление задачи
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //Функция trim удаляет пространство спереди и сзади введенного значения

    //Если нажата кнопка ввода и длина вмененного значения больше 0
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox">
            <span class="task">${inputVal}</span>
            <span class="material-symbols-outlined trash-icon" onclick="deleteTask(this)">delete</span>
        </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag); //Вставка тега li в div todolist
        inputField.value = ""; //Удаление значения из поля ввода
        allTasks();
    }
});

//Ставим и снимаем галочку
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //Получение галочки
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//Удаление задачи на значок удаления
function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
}

//Удаление всех задач на кнопку очистки
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})