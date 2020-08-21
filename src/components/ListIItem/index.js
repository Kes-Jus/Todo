import React from "react"
import "./item.css"

class ListItem extends React.Component{

    render(){
        return(
            <li>{this.props.text}</li>
        )
    }
}

export default ListItem