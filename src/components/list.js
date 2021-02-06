import React from "react"
import "./list.css"
import ListItem from "./listItem"

class List extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            tasks  : this.props.tasks
        }
     }
    render() {
        return (
            <ul id="todo-list">
                { this.state.tasks &&  this.state.tasks.map( (element, index) => (
                    <ListItem index={index} handleDelete={this.props.handleDelete} time={element.time} text={element.text}>
                    </ListItem>
                ))}
            </ul>
        )
    }
}

// TODO : CSS 01
// Route : >>
// Store.

export default List