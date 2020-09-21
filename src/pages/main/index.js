import React from "react"
import List from "../../components/List/index"

import "./main.css"

const list = [{'text' : "bla bla bla"}, {'text' : "bla bla bla"}, {'text' : "bla bla bla"},{'text' : "bla bla bla"}]
class Main extends React.Component{
    constructor(props){
        super(props)
      
       
        this.handleAdd  = this.handleAdd.bind()
        this.handelDelete= this.handelDelete.bind()
        this.handelDeletedouble=this.handelDeletedouble.bind()
     
    }


    handleAdd = (event)=>{
        let todo = document.getElementById("todo-list")
        let li =  document.createElement("li")
        let text = document.getElementById("task-name").value
        let a = document.createElement("a") 
        a.innerText= "[x]"
        a.href="#"

        a.addEventListener("click",event=>{
          let li= event.target .parentNode
          let ul =li.parentNode
            ul.removeChild(li) 
          // event.currentTarget.parentElement.remove();
       
        })
          li.innerText=text
          li.appendChild(a)
        todo.appendChild(li)
        
        
    }
 
    

    handelDelete=()=>{
        let todo = document.getElementById("todo-list")
          todo.removeChild(todo.childNodes[0])
 
    }
    handelDeletedouble=()=>{
      let inputValue = document.getElementById("task-name").value;
      let ListValue = document.getElementById("todo-list").value;
      if (inputValue === ListValue){
          console.log("the value is double");
        
      }
    }
    render(){

        return(
            <div className="app">
         <input type="text" id="task-name" name="task-name" placeholder="Enter your task"/>
            <button onClick={this.handleAdd}>add</button>
            <button onClick={this.handelDelete}>Delete</button>
           <List textlist={list} ></List>
           </div>
        )
    }
}


export default Main