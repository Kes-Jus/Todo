import React from "react"
import "./list.css"
import ListItem from "../ListIItem/index"



class List extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            tasks  : this.props.tasks
        }
         console.log(this.props.tasks)
     }
   
    render() {
        console.log(this.state.tasks)
        
        return (
            <ul id="todo-list" >
                { this.state.tasks &&  this.state.tasks.map(element => (
                    <ListItem handleDelete={this.props.handleDelete} time={element.time} text={element.text}>
                    </ListItem>
                ))}
            </ul>
        )
    }
}

export default List