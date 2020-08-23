import React from "react"
import List from "../../components/List/index"

const list = [{'text' : "bla bla bla"}, {'text' : "bla bla bla"}, {'text' : "bla bla bla"},{'text' : "bla bla bla"}]
class Main extends React.Component{
    constructor(props){
        super(props)
        this.handleAdd  = this.handleAdd.bind()
    }
    handleAdd = (event)=>{
        let todo = document.getElementById("todo-list")
        let li =  document.createElement("li")
        let text = document.createTextNode('azeazeazeaze')
        li.appendChild(text)
        todo.appendChild(li)
    }
    render(){

        return(
            <>
            <button onClick={this.handleAdd}>add</button>
        
           <List textlist={list}></List>
           </>
        )
    }
}

export default Main