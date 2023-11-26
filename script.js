function addTask(){
  const entered=document.getElementById("taskInput");
  const taskList=document.getElementById("taskList");
  if (entered.value !==""){
const li=document.createElement("li");
 const task=document.createTextNode(entered.value);
    li.appendChild(task);
    const editBtn=document.createElement("button");
    editBtn.innerHTML="Edit";
    editBtn.onclick=function(){
      editTask(li);
    }
    li.appendChild(editBtn);
    const deleteBtn=document.createElement("button");
      deleteBtn.innerHTML="Delete";
    deleteBtn.onclick=function(){
      deleteTask(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    entered.value="";
  }
  else{
    alert(" you forgot to  enter a task!");
  }
 
}
function editTask(task){
  const text=prompt("edit this task", task.firstChild.nodeValue);
  if(text !==null){
    task.firstChild.nodeValue=text;
  }
  
}
taskList.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
e.target.classList.toggle("checked");
}},false);

function deleteTask(task){
  task.remove();

}

function saveData(){
localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
taskList.innerHTML=localStorage.getItem("data");
}
showTask();
