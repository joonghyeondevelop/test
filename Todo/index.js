const todo = document.querySelector('#todo');
const listBtn = document.querySelector('.addList_btn');
const todoListBox = document.querySelector('.todo_list');
const inputValue = document.querySelectorAll('input');

let roadData = JSON.parse(localStorage.getItem('todo')) || [];

let num = localStorage.getItem('todoNum') ? JSON.parse(localStorage.getItem('todoNum')) : 1;

class TodoClass {
    constructor(number, date, author, write) {
        this.number = number;
        this.date = date;
        this.author = author;
        this.write = write;
    }
}

listBtn.addEventListener('click', () => {
    const todoList = document.createElement('ul');
    const todoNumber = document.createElement('li');
    const todoDate = document.createElement('li');
    const todoAuthor = document.createElement('li');
    const todoWrite = document.createElement('li');
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('deleteTodoBtn');

    todoListBox.append(todoList);
    todoList.append(todoNumber, todoDate, todoAuthor, todoWrite, todoDelete);

    const saveData = new TodoClass(num, inputValue[0].value, inputValue[1].value, todo.value);

    roadData.push(saveData);

    // Update num and save it in localStorage
    localStorage.setItem('todo', JSON.stringify(roadData));
    localStorage.setItem('todoNum', JSON.stringify(++num));

    todoNumber.innerHTML = "글 번호: " + saveData.number;
    todoDate.innerHTML = "날짜: " + saveData.date;
    todoAuthor.innerHTML = "작성자: " + saveData.author;
    todoWrite.innerHTML = "할일: " + saveData.write;
    todoDelete.innerHTML = "삭제";
});



const showData = JSON.parse(localStorage.getItem('todo'));

for (let i = 0; i < roadData.length; i++) {
    const todoList = document.createElement('ul');
    const todoNumber = document.createElement('li');
    const todoDate = document.createElement('li');
    const todoAuthor = document.createElement('li');
    const todoWrite = document.createElement('li');
    const todoDelete = document.createElement('button');

    todoListBox.append(todoList);
    todoList.append(todoNumber, todoDate, todoAuthor, todoWrite, todoDelete);

    todoNumber.innerHTML = "글 번호: " + showData[i].number;
    todoDate.innerHTML = "날짜: " + showData[i].date;
    todoAuthor.innerHTML = "작성자: " + showData[i].author;
    todoWrite.innerHTML = "할일: " + showData[i].write;
    todoDelete.innerHTML = "삭제";

    
};
const deleteBtn = document.querySelector('.deleteTodoBtn');

deleteBtn.addEventListener('click', (e) => {
    if(e.target === showData[i]){
        showData.splice(showData[i], 1)
    }
});