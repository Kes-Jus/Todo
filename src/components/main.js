import React from "react"
import List from "./list"
import "./main.css"
import moment from "moment"

        class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            taskName: "",
            apiResponse: ""
        }
    }

 
    updateTaskName = event => {
        this.setState({
            taskName: event.target.value,
        })
    }

    handleAddReactWay = () => {
        if (this.state.taskName !== '') {
            let cloneTasks = this.state.tasks
            if (this.handelCheckRepeatedTasks(this.state.taskName))
                this.state.tasks.push({ 'text': this.state.taskName, 'time': moment().format('MMMM Do YYYY, h:mm a') })
            this.setState({ tasks: cloneTasks })
     }
    }

    handelDeleteJsWay = () => {
        if (this.state.tasks.length > 0) {
            const cloneTask = this.state.tasks;
            cloneTask.shift()
            this.setState({ tasks: cloneTask })
        }
    }

    handelCheckRepeatedTasks = (text) => {
        let result = true
        this.state.tasks.forEach(element => {
            if (element.text === (text) || !text) {
                alert("you can not add same tasks  or this text is empty")
                result = false
            }
        });
        return result
    }

    handleDelete = (index) => {
        let cloneTasks = this.state.tasks
        cloneTasks.splice(index, 1);
        this.setState({
            tasks: cloneTasks
        })
    }

   async callAPI() {
        await fetch("http://localhost:9000/main",{
            headers: {
                'Content-Type':' application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));   

           
    }
    
    componentWillMount() {
        this.callAPI();
    }
 
   
  
   
    render() {
        return (
            <div className="app">
                <div className="nav">
                    <h1 className="title">{this.state.apiResponse}</h1>
                </div>
                <div className="container">
                    <div className="liststyle">
                        <h2 >Enter Your Task : </h2>
                        <input type="text" id="task-name" name="task-name" placeholder="Enter your task" onChange={this.updateTaskName} value={this.state.taskName} />
                    </div>
                    <div className="btns">
                        <button className="addbtn" onClick={this.handleAddReactWay}>add</button>
                        <button className="deletebtn" onClick={this.handelDeleteJsWay}>Delete</button>
                    </div>
                    <div className="tasklist">
                        <h2 className="titleT">Your Tasks :</h2>
                        <List handleDelete={this.handleDelete} tasks={this.state.tasks}>
                        </List>

                    </div>
                </div>
            </div>
        )
    }
        }

export default Main