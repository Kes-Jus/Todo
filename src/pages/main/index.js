import React from "react"
import List from "../../components/List/index"
import "./main.css"
import moment from "moment"


class Main extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            tasks: []
        }

    }
      

    handleAddReactWay = async (event) => {
        let text = document.getElementById("task-name").value
        let new_tasks_list = this.state.tasks
if (this.handelCheckRepeatedTasks(new_tasks_list , text )){

    await new_tasks_list.push({ 'text': text, 'time':moment().format('MMMM Do YYYY, h:mm a') })
}
        
        
      
        await this.setState({
            tasks: new_tasks_list,
        })
    
    }

    
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
    handleDelete =(key)=> {
        let tasks =  this.state.tasks
      tasks.forEach(element =>{
            if(element.text === key){
                tasks.splice(key, 1)
                this.setState({tasks})

               
            }
        })
    


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
                        <List handleDelete={this.handleDelete} tasks={this.state.tasks}>
                        </List>

                    </div>
                </div>
            </div>
        )
    }
}


export default Main