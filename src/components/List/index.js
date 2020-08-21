import React from "react"
import "./list.css"

import ListItem from "../ListIItem/index"
class List extends React.Component{

    render(){
        return(
            <ul>
                {this.props.textlist.map(element=>(
                    <ListItem  text={element.text}></ListItem>  
                ))}  
            </ul>
        )
    }
}

export default List