const todoList = [];
let form = document.querySelector(".form");
let myinput = document.querySelector("#to-do")
let list = document.querySelector(".mylist")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    list.innerHTML+=`<li class="list-group-item" style = "display: flex;align-items: center;justify-content: space-between;">
    <span>${myinput.value}</span>
    <div>
    <button class="btn btn-warning done"><i class="done fa-solid fa-check"></i></button>
    <button class="btn btn-danger remove"><i class=" trash fa-solid fa-trash"></i></button>
    </div>
    
    </li>`
//     myinput.value = ""


  let todolist= localstorageread()
  todolist.push(myinput.value)
  
 console.log(todolist)
 localStorage.setItem("mylist",JSON.stringify(todolist))

//  let todormvlist= localstorageremove()
//  todormvlist.push(list.children[0])
 
// console.log(todormvlist)
// localStorage.setItem("myrmvlist",JSON.stringify(todormvlist))


let removes = document.querySelectorAll(".remove");
removes.forEach((item)=>{
     item.addEventListener("click",function(){
          list.children[0].remove();
     })
});

let dones = document.querySelectorAll(".done");
dones.forEach((doneitem)=>{
     doneitem.addEventListener("click",function(){
          doneitem.parentElement.parentElement.style.opacity = "0.3"
     })
})    
})

let localstorageread = function(){
     let todos
     if(localStorage.getItem("mylist")==null){
          todos = []
     }
     else{
          todos = JSON.parse(localStorage.getItem("mylist"))
     }
     return todos
}


// document.addEventListener('DOMContentLoaded', function () 
// {
//      let todolist= localstorageread()
//      todolist.push(myinput.value)
     
//     console.log(todolist)
//     localStorage.setItem("mylist",JSON.stringify(todolist))
// });




