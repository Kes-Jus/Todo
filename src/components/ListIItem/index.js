import React from "react"
import "./item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



class ListItem extends React.Component {

 


  
    render() {
        return (
         

            <li key={this.props.text}>
                <p className="text">{this.props.text}</p>
                <span onClick={(event )=>{ 
                    console.log(event)
                    this.props.handleDelete(this.props.text)}}><FontAwesomeIcon icon={faTrash} size="lg"/></span>
                <p>{this.props.time}</p>
              
                
            </li>



        )
    }

}




export default ListItem
