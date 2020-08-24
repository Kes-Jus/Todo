import React from "react"
import List from "../../components/List/index"

const list = [{'text' : "bla bla bla"}, {'text' : "bla bla bla"}, {'text' : "bla bla bla"},{'text' : "bla bla bla"}]
class Main extends React.Component{
    constructor(props){
        super(props)
      
       
        this.handleAdd  = this.handleAdd.bind()
        this.handelDelete= this.handelDelete.bind()
    }
    handleAdd = (event)=>{
        let todo = document.getElementById("todo-list")
        let li =  document.createElement("li")
        let text = document.createTextNode('azeazeazeaze')
        li.appendChild(text)
        todo.appendChild(li)
    }
 
    

    handelDelete=()=>{
        let todo = document.getElementById("todo-list")
        let  li =  todo.removeChild(todo.childNodes[0])
      //todo.remove(li)
   // for(let i = 0 ; i<= todo.length ;i++){
      //  todo.remove(todo[i])
     
    }

    render(){

        return(
            <>

            <button onClick={this.handleAdd}>add</button>
            <button onClick={this.handelDelete}>Delete</button>
           
        
           <List textlist={list}></List>
           </>
        )
    }
}


export default Main