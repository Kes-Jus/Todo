import React from "react"
import "./list.css"

import ListItem from "../ListIItem/index"
class List extends React.Component{

    render(){
        return(
            <ul id="todo-list">
                {this.props.textlist.map(element=>(
                    <ListItem  text={element.text}  onClick={this.handelDelete}></ListItem> 

                ))}  
            </ul>
        )
    }
}

export default List