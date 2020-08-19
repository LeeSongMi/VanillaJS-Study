// 연결
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"); 

const TODOS_LS = 'toDos';
let toDos = [];

function filterFn(toDo){

}
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id); //toDo = int / li = string so li ->int
    });
    toDos = cleanToDos
    saveToDos();
}
function saveToDos(){
    //localStorage는 스트링 파일만 읽기 때문에 object를 스트링 형태로 저장해줘야한다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length +1;
    const span = document.createElement("span");

    delBtn.innerText = "x";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault(); // 입력값 고정
    const currentValue = toDoInput.value;   //입력값 받아옴
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS) // toDos 값 가져오기
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);    //String값 Object로 변경 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);

        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init()