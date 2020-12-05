import React from "react"
import List from "../../components/List/index"
import "./main.css"


const list = [/*{'text' : "bla bla bla"}, {'text' : "bla bla bla"}, {'text' : "bla bla bla"},{'text' : "bla bla bla"}*/]
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: list
        }

        this.handleAddReactWay = this.handleAddReactWay.bind()
        this.handelDeleteJsWay = this.handelDeleteJsWay.bind()


    }

    // add tasks to list js way
    /*
    handleAddJSWay = (event)=>{
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
    */

    handleAddReactWay = (event) => {

        let text = document.getElementById("task-name").value

        let new_tasks_list = this.state.tasks
        if (this.handelCheckRepeatedTasks(new_tasks_list, text) === true) {
            new_tasks_list.push({ 'text': text })

        }

        this.setState({
            tasks: new_tasks_list
        })

    }


    // delete tasks js Way
    handelDeleteJsWay = () => {
        let todo = document.getElementById("todo-list")
        todo.removeChild(todo.childNodes[0])

    }



    handelCheckRepeatedTasks = (list, text) => {
        let result = true
        list.forEach(element => {
            if (element.text === (text) || !text) {
                alert("you can not add same tasks  or this text is empty")
                result = false
            }
        });

        return result
    }
    render() {

        return (
            <div className="app">

                <div className="nav">
                    <h1 className="title">ToDo-List</h1>
                </div>
                <div className="container">

                    <div className="liststyle">
                        <h2 >Enter Your Task : </h2>
                        <input type="text" id="task-name" name="task-name" placeholder="Enter your task" />
                    </div>
                    <div className="btns">
                        <button className="addbtn" onClick={this.handleAddReactWay}>add</button>
                        <button className="deletebtn" onClick={this.handelDeleteJsWay}>Delete</button>
                    </div>
                    <div className="tasklist">
                        <h2 className="titleT" >Your Tasks :</h2>
                        <List textlist={list}></List>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main